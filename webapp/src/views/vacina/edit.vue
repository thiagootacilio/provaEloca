<template>
  <div class="vacinaForm">
    <h1>{{ title }} Vacina</h1>
     <v-form
            ref="form"
            v-model="validDocumentoForm"
            lazy-validation
            autocomplete="off"
          >
         <v-row class="col-12">
          <v-col class="col-6">
          <v-select
              v-model="form.co_fabricante"
              :items="fabricantes"
              label="Fabricantes"
              item-text="no_nome"
              item-value="id"
              :rules="[mxRegras.obrigatorio]"
            />
        </v-col>


        
        <v-col class="col-6">
          <v-text-field
            v-model="form.ds_lote"
            label="Lote"
            :rules="[mxRegras.obrigatorio]"
          />
        </v-col>
        <v-col class="col-6">
          <v-text-field
            v-model="form.nu_dose"
            label="Dose"
            v-mask="'##'"
            :rules="[mxRegras.obrigatorio]"
          />
        </v-col>
        <v-col class="col-6">
          <v-text-field
            v-model="form.nu_dias_intervalo"
            label="Intervalo(dias)"
            :rules="[mxRegras.obrigatorio]"
          />
        </v-col>
        <v-col class="col-6">
          <s-data-picker
            v-model="form.dt_validade"
            label="Validade"
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
  import * as fabricante from '@/service/fabricante'
  import {atualizar,buscar} from '@/service/vacina'

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
                fabricantes:[],
                isProcessing: false,
                resource: '/vacina',
                title: 'Editar'
            }
        },
        components: {SDataPicker},
        mixins: [MxRegras,MxMask],
        mounted: function () {
          this.getFabricantes();
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
