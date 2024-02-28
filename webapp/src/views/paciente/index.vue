<template>
  <div class="paciente">
    <h1>Paciente</h1>
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
            <template v-slot:item.no_cpf="{item}">
                    {{ item.no_cpf | mxFiltroFormatarCPFCNPJ }}
              </template>
             <template v-slot:item.action="{ item }" >
                
                  <v-tooltip top>
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
                
                  <v-tooltip top>
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
                
        </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script type="text/javascript">
    import {deletar,buscarTodos} from '@/service/paciente'
    import MxFilters from '@/lib/mixins/filters';
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
                    text: 'CPF',
                    align: 'left',
                    value: 'no_cpf',
                  },
                  {
                    text: 'Nome',
                    align: 'left',
                    value: 'no_nome',
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
              this.$router.push(`/paciente/${item.co_paciente}/edit`) 
            },
            deleteAction(item) {
              if (window.confirm("Confirma exclusão do item?")) {
                deletar(item.co_paciente).then((res) => {
                  this.list();
                });
              }
            },
            newPage() {
              this.$router.push(`/paciente/new`)
            },
            check_permission(){

            }
        }
    }
</script>