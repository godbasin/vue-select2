<template>
  <div>
    <h1>v-select2-component Exemple<small><a href="https://github.com/godbasin/vue-select2">[Github]</a></small></h1>
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-md-2 control-label" style="text-align: right;">Select2</label>
        <div class="col-md-6">
          <Select2 v-model="optionSelected" :options="myOptions"  :settings="{ placeholder: 'Specifies the placeholder through settings', width: '50%' }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
          <p>Value: {{ optionSelected }}</p>
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-2 control-label" style="text-align: right;">Select2 with multiple enable</label>
        <div class="col-md-6">
          <Select2 v-model="optionsSelected" :options="myOptions"  :settings="{ placeholder: 'Specifies the placeholder through settings', width: '50%', multiple: true }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
          <p>Value: {{ optionsSelected }}</p>
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-2 control-label" style="text-align: right;">Change Value</label>
        <div class="col-md-4"><input type="text" class="form-control" v-model="inputVal" /></div>
        <div class="col-md-2"><a class="btn btn-default" @click="changeValue()">change value</a></div>
      </div>
      <div>
        <label class="col-md-2 control-label" style="text-align: right;">Change Options</label>
        <div class="col-md-4"><a class="btn btn-default" @click="changeOptions()">change options</a></div>
      </div>
    </form>
  </div>
</template>

<script>
const options1 = ["1-1", "1-2", "1-3", "1-4", "1-5"];
const options2 = ["2-1", "2-2", "2-3", "2-4", "2-5"];
export default {
  name: "hello",
  data() {
    return {
      optionSelected: null,
      optionsSelected: null,
      inputVal: "",
      myOptions: options1 // or [{id: key, text: value}, {id: key, text: value}]
    };
  },
  methods: {
    myChangeEvent(val) {
      console.log(val);
      // alert(val);
    },
    mySelectEvent({ id, text, selected }) {
      alert(`id: ${id}, text: ${text}, selected: ${selected}`);
      console.log({ id, text, selected });
    },
    changeOptions() {
      this.myOptions = this.myOptions == options1 ? options2 : options1;
      console.log(this.myOptions);
    },
    changeValue() {
      this.optionSelected = this.inputVal;
      this.optionsSelected = [this.inputVal];
    }
  }
};
</script>
<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
