<template>
  <div class="vacinaForm">
    <h1>Registrar Vacinação</h1>
     <v-form
            ref="form"
            v-model="validDocumentoForm"
            lazy-validation
            autocomplete="off"
          >
         <v-row class="col-12">
          <v-col class="col-6">
          <v-select
              v-model="form.co_vacina"
              :items="vacinas"
              label="Vacina"
              item-text="identificacao"
              item-value="co_vacina"
              :rules="[mxRegras.obrigatorio]"
            />
        </v-col>
        
        <v-col class="col-6">
          <v-select
              v-model="form.co_paciente"
              :items="pacientes"
              label="Paciente"
              item-text="identificacao"
              item-value="co_paciente"
              :rules="[mxRegras.obrigatorio]"
            />
        </v-col>
        
        <v-col class="col-6">
          <s-data-picker
            v-model="form.dt_vacinacao"
            label="Data vacinação"
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
  import * as vacina from '@/service/vacina';
  import * as paciente from '@/service/paciente';
  

  import {cadastrar} from '@/service/vacinacao';

  import MxRegras from '@/lib/mixins/regras';
  import MxMask from '@/lib/mixins/mask';
  import SDataPicker from '@/lib/mixins/DatePicker';

  export default {
        name: 'vacinaForm',
        data () {
            return {
                validDocumentoForm: false,
                search:'',
                form: {},
                vacinas:[],
                pacientes:[],
                isProcessing: false,
                resource: '/vacinacao',
                title: 'Nova'
            }
        },
        components: {SDataPicker},
        mixins: [MxRegras,MxMask],
        mounted: function () {
          this.getVacinas();
          this.getPaciente();
        },
        methods: {
          async getVacinas(){
            this.vacinas = await vacina.buscarTodos();
          },
          async getPaciente(){
            this.pacientes = await paciente.buscarTodos();
          },
          
          onSave() {
            if (!this.$refs.form.validate()) {
              return;
            }
            cadastrar(this.form).then((res) => {
              this.form={}
              alert('Cadastro realizado com sucesso!');
              this.$router.push(this.resource);
            }).catch(({ response }) => {
              alert(response.data.message)
            });
          }
        }
    }

</script>
