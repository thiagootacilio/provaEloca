import {get/*,byMethod*/} from '../lib/api'

export const buscar = id => get(`fabricante/${id}`);
export const buscarTodos = () => get('/fabricante').then((res) => {
  return res.data.data;
});
