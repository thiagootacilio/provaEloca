<template>
  <div class="empresaForm">
    <h1>Cliente</h1>
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
    import {deletar,buscarTodos} from '@/service/cliente'
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
                    text: 'recnum',
                    align: 'left',
                    value: 'recnum',
                  },
                  {
                    text: 'codigo',
                    align: 'left',
                    value: 'codigo',
                  },
                  {
                    text: 'empresa',
                    align: 'left',
                    value: 'empresa',
                  },
                  {
                    text: 'razao_social',
                    align: 'left',
                    value: 'razao_social',
                  },
                  {
                    text: 'tipo',
                    align: 'left',
                    value: 'tipo',
                  },
                  {
                    text: 'cpf_cnpj',
                    align: 'left',
                    value: 'cpf_cnpj',
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
              this.$router.push(`/cliente/${item.recnum}/edit`) 
            },
            deleteAction(item) {
              if (window.confirm("Confirma exclusão do item?")) {
                deletar(item.recnum).then((res) => {
                  this.list();
                });
              }
            },
            newPage() {
              this.$router.push(`/cliente/new`)
            },
            check_permission(){

            }
        }
    }
</script>