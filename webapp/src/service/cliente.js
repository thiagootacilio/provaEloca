import {get, byMethod} from '../lib/api'

export const buscar = id => get(`/cliente/${id}`).then((res) => {
  return res.data.data;
});

export const buscarTodos = () => get('/cliente').then((res) => {
  return res.data.data;
});

export const cadastrar = params => byMethod('POST','cliente', params);

export const atualizar = params => byMethod('PUT',`cliente/${params.recnum}`, params);

export const deletar = id => byMethod('DELETE',`cliente/${id}`);
