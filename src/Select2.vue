<template>
  <select>
    <slot></slot>
  </select>
</template>

<script>
import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.min.css'

export default {
  name: 'Select2',
  data() {
    return {
      select2: null
    };
  },
  model: {
    event: 'change',
    prop: 'value'
  },
  props: {
    options: {
      type: Array,
      default: []
    },
    settings: {
      type: Object,
      default: () => {}
    },
    value: null
  },
  watch: {
    options(val) {
      this.setOption(val);
    },
    value(val) {
      this.setValue(val);
    }
  },
  methods: {
    setOption(val = []) {
      this.select2.empty();
      this.select2.select2({
        ...this.settings,
        data: val
      });
      this.setValue(this.value);
    },
    setValue(val) {
      if (val instanceof Array) {
        this.select2.val([...val]);
      } else {
        this.select2.val([val]);
      }
      this.select2.trigger('change');
    }
  },
  mounted() {
    this.select2 = $(this.$el)
      .select2({
        ...this.settings,
        data: this.options
      })
      .on('select2:select select2:unselect', ev => {
        const { id, text, selected } = ev['params']['data'];
        const selectValue = this.select2.val();
        this.$emit('change', selectValue);
        this.$emit('select', { id, text, selected });
      });
    this.setValue(this.value);
  },
  beforeDestroy() {
    this.select2.select2('destroy');
  }
};
</script>
