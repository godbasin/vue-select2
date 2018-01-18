<template>
  <div>
    <select class="form-control" :placeholder="placeholder" :disabled="disabled"></select>
  </div>
</template>

<script>
import $ from "jquery";
import "./select2/select2.js";

export default {
  name: "Select2",
  data() {
    return {
      select2: null
    };
  },
  model: {
    event: "change",
    prop: "value"
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
    disabled: {
      type: Boolean,
      default: false
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
      this.select2.select2({ data: val });
      const hasValue = val.find(x => x.id == this.value);
      if ((!this.value || !hasValue) && val.length) {
        const { id, text } = val[0];
        this.$emit("change", id);
        this.$emit("select", { id, text });
      }
      if(hasValue){
        this.setValue(hasValue.id)
      }else{
      this.select2.trigger("change");
      }
    },
    setValue(val) {
      this.select2.select2("val", [val]);
      this.select2.trigger("change");
    }
  },
  mounted() {
    this.select2 = $(this.$el)
      .find("select")
      .select2({
        data: this.options
      })
      .on("select2:select", ev => {
        const { id, text } = ev["params"]["data"];
        this.$emit("change", id);
        this.$emit("select", { id, text });
      });
    if (this.value) {
      this.setValue(this.value);
    }
  },
  beforeDestroy() {
    this.select2.select2("destroy");
  }
};
</script>

<style scope>
@import "./select2/select2.min.css";
</style>
