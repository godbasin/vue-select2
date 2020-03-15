<template>
  <div>
    <select class="form-control" :id="id" :name="name" :disabled="disabled" :required="required"></select>
  </div>
</template>

<script>
import $ from 'jquery';
import 'select2/dist/js/select2.full';
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
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
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
        placeholder: this.placeholder,
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
      .find('select')
      .select2({
        placeholder: this.placeholder,
        ...this.settings,
        data: this.options
      })
      .on('select2:select select2:unselect', ev => {
        this.$emit('change', this.select2.val());
        this.$emit('select', ev['params']['data']);
      });
    this.setValue(this.value);
  },
  beforeDestroy() {
    this.select2.select2('destroy');
  }
};
</script>
