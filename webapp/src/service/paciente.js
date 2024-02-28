import {get, byMethod} from '../lib/api'

export const buscar = id => get(`/paciente/${id}`).then((res) => {
  return res.data.data;
});

export const buscarTodos = () => get('/paciente').then((res) => {
  return res.data.data;
});

export const cadastrar = params => byMethod('POST','paciente', params);

export const atualizar = params => byMethod('PUT',`paciente/${params.co_paciente}`, params);

export const deletar = id => byMethod('DELETE',`paciente/${id}`);
