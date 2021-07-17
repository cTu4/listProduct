<template>
  <div >
    <input
      type="text"
      v-model="value"
      :placeholder="placeholder"
      @click="click"
      @keypress="press"
    >
  </div>
</template>

<script>
export default {
  name: "inputMask",
  props:[
    "mask",
    "placeholder"
  ],
  data(){
    return{
      value: "",
      keyCodes:[
        107,
        95,
        45,
        32
      ]
    }
  },
  computed:{

  },
  mounted() {

  },
  methods:{
   click(){
     this.value = this.mask;
   },
   press(e){

     if(
       (e.charCode > 48 || e.charCode < 57)
     ){
       console.log(e)

     }
   }

  }
}
</script>

<style module>

</style>
