<template>
  <div>
    <select class="form-control" :placeholder="placeholder" :value="innerValue"></select>
  </div>
</template>

<script>
import $ from 'jquery';
import "./select2/select2.js";

export default {
  name: 'Select2',
  data() {
    return {
      innerValue: "",
      select2: null
    };
  },
  model:{
    event: 'change'
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: []
    },
    value: null
  },
  watch : {
    options (val) {
      if(val && val.length){
        this.select2.select2({data: val});
        this.select2.trigger('change');
      }
    },
    value(val) {
      if(val){
        this.innerValue = val;
        this.select2.select2('val', [val]);
        this.select2.trigger('change');
      }
    }
  },
  mounted(){
    this.select2 = $(this.$el).find('select').select2({
            data: this.options,
        }).on("select2:select", (ev) => {
            const { id, text } = ev['params']['data'];
            this.innerValue = text;
            this.$emit("change", id);
            this.$emit("select", {id, text});
        })
  },
  beforeDestroy(){
    this.select2.select2('destroy');
  }
}

</script>

<style scope>
@import "./select2/select2.min.css";
</style>
