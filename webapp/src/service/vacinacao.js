import {get, byMethod} from '../lib/api'

export const buscar = id => get(`/vacinacao/${id}`).then((res) => {
  return res.data.data;
});

export const buscarTodos = () => get('/vacinacao').then((res) => {
  return res.data.data;
});

export const cadastrar = params => byMethod('POST','vacinacao', params);

//export const atualizar = params => byMethod('PUT',`vacina/${params.co_vacina}`, params);

export const deletar = co_vacinacao => byMethod('DELETE',`vacinacao/${co_vacinacao}`);
