<template>
  <v-menu
    ref="menu"
    v-model="menu"
    transition="scale-transition"
    :close-on-content-click="false"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{on}">
      <v-text-field
        :disabled="disabled"
        v-model="dateFormatted"
        v-mask="['##/##/####']"
        v-bind="$attrs"
        :label="label"
        :readonly="textinputreadonly"
        return-masked-value
        v-on="on"
      />
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
      show-current
      locale="pt-BR"
      @input="menu = false"
    />
  </v-menu>
</template>

<script>
import MxMask from '@/lib/mixins/mask';

export default {
  name: 'DatePicker',
  mixins: [MxMask],
  props: {
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'Data de Nascimento',
    },
    textinputreadonly: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    menu: false,
    date: '',
    dateFormatted: '',
  }),
  watch: {
    value(val) {
      const matches = /^(\d{4})[-\/](\d{2})[-\/](\d{2})$/.exec(val);

      if (!matches) return null;
      this.date = val.substr(0, 10);
    },
    date(val) {
      this.dateFormatted = this.formatDate(val);
      this.$emit('input', val);
    },
    dateFormatted(val) {
      if (val && val.match(this.regexDate)) {
        this.$emit('input', this.formatDateUsa(val));
      }

      if (!val) {
        this.$emit('input', '');
      }
    },
  },
  mounted() {
    this.date = this.value;
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.substr(0, 10).split('-');
      return `${day}/${month}/${year}`;
    },
    formatDateUsa(date) {
      if (!date) return null;
      const [day, month, year] = date.substr(0, 10).split('/');
      return `${year}-${month}-${day}`;
    },
    reset() {
      this.menu = false;
      this.dateFormatted = '';
      this.$emit('input', '');
    },
  },
};
</script>
