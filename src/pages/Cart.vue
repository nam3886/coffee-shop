<template>
  <div class="osahan-checkout">
    <div class="d-none">
      <div class="bg-primary border-bottom p-3 d-flex align-items-center">
        <a class="toggle togglew toggle-2" href="#"><span></span></a>
        <h4 class="font-weight-bold m-0 text-white">Checkout</h4>
      </div>
    </div>
    <!-- checkout -->
    <div class="container position-relative">
      <div class="py-5 row">
        <CheckoutForm />
        <Bill />
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutForm from "@/features/Cart/CheckoutForm.vue";
import Bill from "@/features/Cart/Bill.vue";

export default {
  components: {
    CheckoutForm,
    Bill,
  },
};
</script>
