<template>
  <div class="pacienteForm">
    <h1>{{ title }} Paciente</h1>
     <v-form
            ref="form"
            v-model="validDocumentoForm"
            lazy-validation
            autocomplete="off"
          >
       <v-row class="col-12">
          
        <v-col class="col-3">
          <v-text-field
            v-model="form.no_cpf"
            label="CPF"
            v-mask="'###.###.###-##'"
            :rules="[mxRegras.obrigatorio]"
          />
        </v-col>
        <v-col class="col-6">
          <v-text-field
            v-model="form.no_nome"
            label="Nome"
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
  
  import {atualizar,buscar} from '@/service/paciente'

  import MxRegras from '@/lib/mixins/regras';
  import MxMask from '@/lib/mixins/mask';
  import SDataPicker from '@/lib/mixins/DatePicker';

  export default {
        name: 'pacienteForm',
        data () {
            return {
                validDocumentoForm: false,
                search:'',
                form: {},
                fabricantes:[],
                isProcessing: false,
                resource: '/paciente',
                title: 'Editar'
            }
        },
        components: {SDataPicker},
        mixins: [MxRegras,MxMask],
        mounted: function () {
          this.getForm();
        },
        
        methods: {
          async getFabricantes(){
            this.fabricantes = await fabricante.buscarTodos();
          },
          async getForm(){
            this.form = await buscar(this.$route.params.id);
            this.form.co_fabricante = this.form.fabricante.co_fabricante; 
            this.form.dt_validade = this.form.dt_validade_us;
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
