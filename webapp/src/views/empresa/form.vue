<template>
  <div class="empresaForm">
    <h1>{{ title }} Empresa</h1>
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
            :rules="[mxRegras.obrigatorio]"
          />
        </v-col>

        
        <v-col class="col-6">
          <v-text-field
            v-model="form.sigla"
            label="sigla"
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
      </v-row>
      <v-row class="mt-4 text-right">
          <v-col>
            <v-btn
              type="submit"
              color="primary"
              class="white--text mr-1"
              @click.prevent="onSave()"
            >
              Cadastrar
            </v-btn>
          </v-col>
        </v-row>
     </v-form>
  </div>
</template>

<script>
  import {cadastrar} from '@/service/empresa'

  import MxRegras from '@/lib/mixins/regras';
  import MxMask from '@/lib/mixins/mask';
  import SDataPicker from '@/lib/mixins/DatePicker';

  export default {
        name: 'empresaForm',
        data () {
            return {
                validDocumentoForm: false,
                search:'',
                form: {},
                isProcessing: false,
                resource: '/empresa',
                title: 'Nova'
            }
        },
        components: {SDataPicker},
        mixins: [MxRegras,MxMask],
        mounted: function () {
          
        },
        methods: {
          
          onSave() {
            if (!this.$refs.form.validate()) {
              return;
            }
            cadastrar(this.form).then((res) => {
              this.form={}
              alert('Cadastro realizado com sucesso!');
              this.$router.push(this.resource);
            });;
          }
        }
    }

</script>
