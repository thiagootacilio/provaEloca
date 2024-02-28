import {get, byMethod} from '../lib/api'

export const buscar = id => get(`/empresa/${id}`).then((res) => {
  return res.data.data;
});

export const buscarTodos = () => get('/empresa').then((res) => {
  return res.data.data;
});

export const cadastrar = params => byMethod('POST','empresa', params);

export const atualizar = params => byMethod('PUT',`empresa/${params.recnum}`, params);

export const deletar = id => byMethod('DELETE',`empresa/${id}`);
