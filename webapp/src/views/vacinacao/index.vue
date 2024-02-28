<template>
  <div class="vacina">
    <h1>Vacinação sd</h1>
     <v-row class="col-12">
      <v-col class="col-12">
         <v-btn
            class="mr-1"
            depressed
            dark
            color="success"
            @click="newPage()"
            v-on="on">
            Novo
          </v-btn>
      </v-col>
     </v-row>
    <v-row class="col-12">
      <v-col class="col-12">
        <v-data-table
              :headers="headers"
              :items="model.data"
              :loading="loading"
              class="elevation-1"
            >
            <template v-slot:item.paciente.no_cpf="{item}">
                    {{ item.paciente.no_cpf | mxFiltroFormatarCPFCNPJ }}
              </template>
             <template v-slot:item.action="{ item }">
                <v-col>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        class="mr-1"
                        depressed
                        dark
                        color="danger"
                        @click="deleteAction(item)"
                        v-on="on"
                      >
                        Excluir
                      </v-btn>
                    </template>
                  </v-tooltip>
                </v-col>
        </template>
      
        </v-data-table>
       
      </v-col>
    </v-row>
  </div>
</template>
<script type="text/javascript">
    import MxFilters from '@/lib/mixins/filters';
    import {deletar,buscarTodos} from '@/service/vacinacao'
    export default {
        mixins: [MxFilters],
        data () {
            return {
                model: {
                    data: []
                },
                pagination:[],
                loading:false,
                 headers: [
                  {
                    text: 'Vacina',
                    align: 'left',
                    value: 'vacina.fabricante.no_nome',
                  },
                  {
                    text: 'Lote',
                    align: 'left',
                    value: 'vacina.ds_lote',
                  },
                  {
                    text: 'Paciente',
                    align: 'left',
                    value: 'paciente.no_nome',
                  },
                   {
                    text: 'CPF',
                    align: 'left',
                    value: 'paciente.no_cpf',
                  },
                  {
                    text: 'Ação',
                    value: 'action',
                    sortable: false,
                  }
              ],
            }
        },
        mounted: function () {
            this.list();
        },
        methods: {
          list() {
            buscarTodos().then((res) => {
                this.model.data = res;
                this.loading=false;
              })
            },
            editPage(item) {
              this.$router.push(`/vacinacao/${item.co_vacinacao}/edit`) 
            },
            deleteAction(item) {
              if (window.confirm("Confirma exclusão do item?")) {
                deletar(item.co_vacinacao).then((res) => {
                  this.list();
                });
              }
            },
            newPage() {
              this.$router.push(`/vacinacao/new`)
            },
            check_permission(){

            }
        }
    }
</script>