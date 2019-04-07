import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import buble from "rollup-plugin-buble"; // Transpile/polyfill with reasonable browser support
import babel from "rollup-plugin-babel";
export default {
  input: "src/index.js", // Path relative to package.json
  output: {
    name: "Select2",
    exports: "named",
    globals: { jquery: "$" }
  },
  plugins: [
      
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true // Explicitly convert template to render function
    }),
    babel(),
    // buble(), // Transpile to ES5
  ],
  external: ["jquery", "select2"]
};
