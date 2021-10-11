<template>
  <div class="d-none">
    <div class="bg-primary border-bottom p-3 d-flex align-items-center">
      <a class="toggle togglew toggle-2" href="#"><span></span></a>
      <h4 class="font-weight-bold m-0 text-white">Profile</h4>
    </div>
  </div>
  <!-- profile -->
  <div class="container position-relative">
    <div class="py-5 osahan-profile row">
      <FoodProfile />
      <GuessAccount />
    </div>
  </div>
</template>

<script>
import FoodProfile from "@/features/FoodDetail/FoodProfile.vue";
import GuessAccount from "@/features/FoodDetail/GuessAccount.vue";
export default {
  components: {
    FoodProfile,
    GuessAccount,
  },
};
</script>

<style></style>
