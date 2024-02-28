import Validate from '@/lib/validate';

export default {
  methods: {
    isCpfValido(strCPF) {
      Validate.isCpfValido(strCPF);
    },
    isEmailValido(strEmail) {
      Validate.isEmailValido(strEmail);
    },
    duasCasasDecimais(valor) {
      const casasDecimais = 2;
      return Number(`${Math.round(`${valor}e${casasDecimais}`)}e-${casasDecimais}`);
    },
    capitalize(data, field) {
      return _.map(data, row => {
        row[field] = _.capitalize(row[field]);
        return row;
      });
    },
  },
};
