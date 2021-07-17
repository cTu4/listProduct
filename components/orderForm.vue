<template>
  <div :class="$style.orderForm">
      <div :class="$style.title">
        Оформить заказ
      </div>
    <form action="/" @submit.prevent="order">
      <input
        v-model="name"
        type="text"
        placeholder="Ваше имя"
        :class="[$v.name.$dirty && (!$v.name.minLength || !$v.name.required)?$style.invalid:'']"
      >
      <small
        :class="$style.textInvalid"
        v-if="$v.name.$dirty && !$v.name.required"
      >
          Введите имя
      </small>
      <small
        :class="$style.textInvalid"
        v-else-if=" $v.name.$dirty && !$v.name.minLength">
        Имя должно быть не менее {{$v.name.$params.minLength.min}} символов
      </small>
      <input
        placeholder="Телефон"
        v-model="phone"
        type="text"
        v-mask="'+7 (###) ###-##-##'"
        :class="[$v.phone.$dirty && (!$v.phone.required || !$v.phone.phoneValid)?$style.invalid:'']"
      >


      <small
        :class="$style.textInvalid"
        v-if="$v.phone.$dirty && !$v.phone.required">
        Введите телефон
      </small>
      <small
        :class="$style.textInvalid"
        v-else-if=" $v.phone.$dirty && !$v.phone.phoneValid">
        Введите корректный номер телефона
      </small>
      <input
        type="text"
        v-model="address"
        placeholder="Адрес"
        :class="[$v.address.$dirty && (!$v.address.minLength || !$v.address.required)?$style.invalid:'']"
      >
      <small
        :class="$style.textInvalid"
        v-if="$v.address.$dirty && !$v.address.required">
        Введите адресс
      </small>
      <small
        :class="$style.textInvalid"
        v-else-if=" $v.address.$dirty && !$v.address.minLength">
        Адрес должен быть не менее {{$v.address.$params.minLength.min}} символов
      </small>
      <input
        type="submit"
        :class="$style.btnBasket"
      >
    </form>

    <div :class="[modal?'show':'']" class="alert alert-success alert-dismissible fade">
      <strong>Ваш заказ отправлен!</strong>
      <div type="button" class="close" @click="modal=!modal" data-dismiss="alert">&times;</div>
    </div>
  </div>
</template>

<script>
import {minLength, required} from "vuelidate/lib/validators"
const isPhone = (value) => /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(value);
export default {
  name: "orderForm",
  props:[

  ],
  validations:{
    name: {
      minLength : minLength(3),
      required
    },
    phone: {
      phoneValid: isPhone,
      required
    },
    address:{
      minLength : minLength(10),
      required
    },
  },
  data(){
      return{
        name:"",
        phone: "",
        address:"",
        modal: false
      }
  },
  directives: {

  },
  methods:{
    order(){
      if(this.$v.$invalid){
        this.$v.$touch();
        console.log(this.$v, this.name)
        return
      }
      else{
        this.name = "";
        this.phone = "";
        this.address = "";
        this.modal = true;
        this.$v.$reset();
        this.$store.dispatch('basket/clear');
        this.$emit('order');
        setTimeout(()=>{
          this.modal = false;
        }, 2000);


      }

    }
  },
  created(){
    console.log(this.$v)
  }
}
</script>

<style module>
  .orderForm{
      margin-top: 30px;
  }
  .orderForm .title{
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #59606D;

  }
  .orderForm form{
    display: flex;
    flex-direction: column;
  }
  .orderForm form input{
    background: #F8F8F8;
    border-radius: 8px;
    padding: 10px;
    border: 0;
    outline: none;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #1F1F1F;
    margin-top: 15px;
  }
  .orderForm form input.btnBasket{
    width: 100%;
    background: #1F1F1F;
    color: #FFFFFF;
    border-radius: 8px;
    text-align: center;
    padding: 15px;
    cursor: pointer;

  }
  .orderForm form input.invalid{
    border: #fa6464 1px solid;
    background: #ffc4c4;
  }
  .textInvalid{
    color:  #ff3e3e;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
