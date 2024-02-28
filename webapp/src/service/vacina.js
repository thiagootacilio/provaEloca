import {get, byMethod} from '../lib/api'

export const buscar = id => get(`/vacina/${id}`).then((res) => {
  return res.data.data;
});

export const buscarTodos = () => get('/vacina').then((res) => {
  return res.data.data;
});

export const cadastrar = params => byMethod('POST','vacina', params);

export const atualizar = params => byMethod('PUT',`vacina/${params.co_vacina}`, params);

export const deletar = id => byMethod('DELETE',`vacina/${id}`);
