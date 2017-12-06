import Vue from 'vue'
const Select2 = require('./Select2.vue');
const Select2Component = {};
Select2Component.install = function (Vue, options) {
    Vue.component('Select2', Select2)
};

export default Select2Component;