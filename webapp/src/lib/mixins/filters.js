export default {
  filters: {
    mxFiltroLabelStatus(status) {
      return status ? 'Sim' : 'Não';
    },
    mxFiltroFormatarCPFCNPJ(value) {
      let data = '';
      if (value) {
        data = value.trim();
      }
      const currentValue = data;

      if (currentValue.length > 11) {
        return currentValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      }

      return currentValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    },
    mxFiltroFormatarCEP(value) {
      if (!value) return null;

      const currentValue = value;

      return currentValue.replace(/(\d{5})(\d{3})/, '$1-$2');
    },
    mxFiltroFormatarTelefone(value) {
      let data = '';
      if (value) {
        data = value.trim();
      }
      const currentValue = data;

      if (currentValue.length > 10) {
        return currentValue.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      }

      return currentValue.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    },
    mxFiltroFormatarData(date) {
      if (!date) return null;
      const [year, month, day] = date.substring(0, 10).split('-');
      return `${day}/${month}/${year}`;
    },
    mxFiltroFormatarMoney(value) {
      const val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    mxFiltroFormatarPorcentagem(value) {
      const val = (value / 1).toFixed(3).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.').concat('%');
    },
    mxFiltroFormatarDataTimes(date) {
      if (!date) return null;
      const todate = (new Date(date).getDate() < 10) ? `0${new Date(date).getDate()}` : new Date(date).getDate();
      const tomonth = (new Date(date).getMonth() + 1 < 10) ? `0${new Date(date).getMonth() + 1}` : new Date(date).getMonth() + 1;
      const toyear = new Date(date).getFullYear();
      const toHours = (new Date(date).getHours() < 10) ? `0${new Date(date).getHours()}` : new Date(date).getHours();
      const toMinutes = (new Date(date).getMinutes() < 10) ? `0${new Date(date).getMinutes()}` : new Date(date).getMinutes();
      const toSeconds = (new Date(date).getSeconds() < 10) ? `0${new Date(date).getSeconds()}` : new Date(date).getSeconds();
      return `${todate}/${tomonth}/${toyear} ${toHours}:${toMinutes}:${toSeconds}`;
    },
    mxFiltroRemoverAcentos(value) {
      let text = value.toLowerCase();
      text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
      text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
      text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
      text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
      text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
      text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
      text = text.replace(new RegExp('\\s', 'gi'), '');
      return text;
    }
  },
};
