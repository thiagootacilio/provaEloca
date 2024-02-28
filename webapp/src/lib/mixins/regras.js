import Validate from '@/lib/validate';

export default {
  data: () => ({
    mxRegras: {
      maiorZero: valor => Validate.isCampoMaiorZero(valor) || 'Este campo deve ser maior que zero',
      obrigatorio: valor => Validate.isCampoPreenchido(valor) || 'Este campo é obrigatório',
      emailValido: valor => Validate.isEmailValido(valor) || 'O endereço de e-mail é inválido',
      dataValida: valor => Validate.isDataValida(valor) || 'Data inválida',
      cpfValido: value => Validate.isCpfValido(value) || 'CPF inválido',
      cnpjValido: value => Validate.isCnpjValido(value) || 'O CNPJ informado é inválido',
      cepValido: value => Validate.isCepValido(value) || 'O CEP informado é inválido',
      TelefoneValido: value => Validate.minTelefone(value) || 'Telefone inválido',
    },
  }),
};
