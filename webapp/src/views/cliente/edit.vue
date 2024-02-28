<template>
  <div class="clienteForm">
    <h1>{{ title }} Cliente</h1>
     <v-form
            ref="form"
            v-model="validDocumentoForm"
            lazy-validation
            autocomplete="off"
          >
         <v-row class="col-12">
         
        <v-col class="col-6">
          <v-text-field
            v-model="form.codigo"
            label="codigo"
            :rules="[mxRegras.obrigatorio]"
          />
        </v-col>
        <v-col class="col-6">
          <v-text-field
            v-model="form.empresa"
            label="empresa"
            v-mask="'##'"
            :rules="[mxRegras.obrigatorio]"
          />
        </v-col>
        <v-col class="col-6">
          <v-text-field
            v-model="form.razao_social"
            label="razao_social"
            :rules="[mxRegras.obrigatorio]"
          />
        </v-col>
        <v-col class="col-6">
          <v-text-field
            v-model="form.tipo"
            label="tipo"
            :rules="[mxRegras.obrigatorio]"
          />
        </v-col>
        <v-col class="col-6">
          <v-text-field
            v-model="form.cpf_cnpj"
            label="cpf_cnpj"
            :rules="[mxRegras.obrigatorio]"
          />
        </v-col>
      </v-row>
      <v-row class="mt-4 text-right">
          <v-col>
            <v-btn
              type="submit"
              color="primary"
              class="white--text mr-1"
              @click.prevent="onSave()"
            >
              Atualizar
            </v-btn>
          </v-col>
        </v-row>
     </v-form>
  </div>
</template>

<script>
  
  import {atualizar,buscar} from '@/service/cliente'

  import MxRegras from '@/lib/mixins/regras';
  import MxMask from '@/lib/mixins/mask';
  import SDataPicker from '@/lib/mixins/DatePicker';

  export default {
        name: 'clienteForm',
        data () {
            return {
                validDocumentoForm: false,
                search:'',
                form: {},
                isProcessing: false,
                resource: '/cliente',
                title: 'Editar'
            }
        },
        components: {SDataPicker},
        mixins: [MxRegras,MxMask],
        mounted: function () {
          
          this.getForm();
        },
        methods: {
          
          async getForm(){
            this.form = await buscar(this.$route.params.id);
          },
          onSave() {
            if (!this.$refs.form.validate()) {
              return;
            }
            atualizar(this.form).then((res) => {
              this.form={}
              alert('Atualizado com sucesso!');
              this.$router.push(this.resource);
            });;
          }
        }
    }

</script>
