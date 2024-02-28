<template>
  <div class="vacina">
    <h1>Vacina</h1>
     <v-row class="col-12">
      <v-col class="col-12">
         <v-btn
            class="mr-1"
            depressed
            dark
            color="success"
            @click="newPage()"
            v-on="on">
            Novo teste
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
             <template v-slot:item.action="{ item }">
                <v-col>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        class="mr-1"
                        depressed
                        dark
                        color="success"
                        @click="editPage(item)"
                        v-on="on"
                      >
                        Editar
                      </v-btn>
                    </template>
                  </v-tooltip>
                </v-col>
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
    import {deletar,buscarTodos} from '@/service/vacina'
    export default {
        data () {
            return {
                model: {
                    data: []
                },
                pagination:[],
                loading:false,
                 headers: [
                  {
                    text: 'Fabricante',
                    align: 'left',
                    value: 'fabricante.no_nome',
                  },
                  {
                    text: 'Lote',
                    align: 'left',
                    value: 'ds_lote',
                  },
                  {
                    text: 'Validade',
                    align: 'left',
                    value: 'dt_validade',
                  },
                   {
                    text: 'Dias intervalo',
                    align: 'left',
                    value: 'nu_dias_intervalo',
                  },
                  {
                    text: 'Doses',
                    align: 'left',
                    value: 'nu_dose',
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
              this.$router.push(`/vacina/${item.co_vacina}/edit`) 
            },
            deleteAction(item) {
              if (window.confirm("Confirma exclusão do item?")) {
                deletar(item.co_vacina).then((res) => {
                  this.list();
                });
              }
            },
            newPage() {
              this.$router.push(`/vacina/new`)
            },
            check_permission(){

            }
        }
    }
</script>