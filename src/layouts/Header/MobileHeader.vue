<template>
  <div class="bg-primary p-3 d-none">
    <div class="text-white">
      <div class="title d-flex align-items-center">
        <ButtonToggleNavigation />
        <router-link :to="{ name: 'home' }" class="text-light">
          <h4 class="font-weight-bold m-0 pl-5">Coffee Shop</h4>
        </router-link>
        <a
          class="text-white font-weight-bold ml-auto"
          data-toggle="modal"
          href="#"
          @click.prevent="$EMITTER.emit(EV_SHOW_FILTER)"
        >
          Lọc
        </a>
      </div>
    </div>
    <div class="input-group mt-3 rounded shadow-sm overflow-hidden">
      <div class="input-group-prepend">
        <button
          class="border-0 btn btn-outline-secondary text-dark bg-white btn-block"
        >
          <i class="feather-search"></i>
        </button>
      </div>
      <input
        type="text"
        class="shadow-none border-0 form-control"
        placeholder="Tìm kiếm nhà hàng hoặc món ăn ..."
      />
    </div>
  </div>
</template>

<script>
import { EV_SHOW_FILTER } from "@/constants";
import ButtonToggleNavigation from "@/layouts/ButtonToggleNavigation";

export default {
  components: { ButtonToggleNavigation },

  setup() {
    return { EV_SHOW_FILTER };
  },
};
</script>
