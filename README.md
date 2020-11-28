# vue3-select2-component

Source code in: [https://github.com/godbasin/vue-select2/tree/npm-publish-code-for-vue3](https://github.com/godbasin/vue-select2/tree/npm-publish-code-for-vue3).

Demo code in: [https://github.com/godbasin/vue-select2/tree/demo-for-vue3-select-component](https://github.com/godbasin/vue-select2/tree/demo-for-vue3-select-component).

## Related Versions

vue3-select2-component is baseed on these plugins and libs(version):
- [vue(>= 3.0-beta)](https://github.com/vuejs/vue-next)
- [jQuery](https://jquery.com/)
- [select2](https://select2.github.io/)

## How to use 
---
### Install
``` cmd
// npm install
npm install vue3-select2-component --save
```

### Use as component
1. import as global component.
``` javascript
// import Select2Component
import Select2 from 'vue3-select2-component';
// Create a Vue application
const app = Vue.createApp({})

// Define a new global component called button-counter
app.component('Select2', Select2)
```

2. import into a single component.
``` javascript
// import Select2Component
import Select2 from 'vue3-select2-component';

<template>
  <div>
    <Select2 v-model="myValue" :options="myOptions" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
    <h4>Value: {{ myValue }}</h4>
  </div>
</template>
<script>
export default {
    // declare Select2Component
    components: {Select2},
    data() {
        return {
            myValue: '',
            myOptions: ['op1', 'op2', 'op3'] // or [{id: key, text: value}, {id: key, text: value}]
        }
    },
    methods: {
        myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            console.log({id, text})
        }
    }
}
</script>
```

### Options
- `options`: `option[]`
  - select options for select2
  - `option`: `{id: key, text: value}` or `string`
- `v-model`: option value that is selected
  - `id` or `string` while multiple is disable
  - `id[]` or `string[]` while multiple is enable
- `update:modelValue`
  - callback when option selected change
  - return value
  - parmas: same with `v-model`
- `select`
  - callback when option selected
  - parmas: `option`(`{id: value, text: key, selected: ifSelected}` or `string`)
- `disabled`
  - if select is disabled
- `placeholder`
  - placeholder attribute for select element
- `id`
  - id attribute for select element
- `name`
  - name attribute for select element
- `settings`
  - configurable settings, see [Select2 options API](https://select2.org/configuration/options-api)
  - `setting`: `{ settingOption: value, settingOption: value }`
