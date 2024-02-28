import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

const theme = {
    primary: '#002c72',
    info: '#1e88e5',
    success: '#4caf50',
    accent: '#fc4b6c',
    default: '#1572E8',
    danger: '#ff5252'
}

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: theme,
            light: theme,
        },
    },
});
