<template>
  <vue-slider
    v-model="ranger"
    :enable-cross="false"
    :min="minPrice"
    :max="maxPrice"
    :marks="marks"
    :adsorb="true"
  ></vue-slider>
  <div class="form-row mt-5">
    <div class="form-group col-6">
      <label for="minPrice">Thấp nhất (₫)</label>
      <input id="minPrice" v-model="min" class="form-control" type="number" />
    </div>
    <div class="form-group text-right col-6">
      <label for="maxPrice">Cao nhất (₫)</label>
      <input id="maxPrice" v-model="max" class="form-control" type="number" />
    </div>
  </div>
</template>

<script>
import { computed, toRefs } from "@vue/reactivity";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/material.css";
import { watch } from "@vue/runtime-core";

export default {
  components: { VueSlider },

  props: {
    modelValue: { type: Array, required: true },
    minPrice: { type: Number, default: 0 },
    maxPrice: { type: Number, default: 100 },
    step: { type: Array, default: () => [] },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const marks = computed(() => props.step);
    const { minPrice, maxPrice } = toRefs(props);
    const ranger = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    });
    const min = computed({
      get: () => ranger.value[0],
      set: (val) => updateRanger(val, 0),
    });
    const max = computed({
      get: () => ranger.value[1],
      set: (val) => updateRanger(val, 1),
    });

    watch(min, (val) => (ranger.value = [val, ranger.value[1]]));
    watch(max, (val) => (ranger.value = [ranger.value[0], val]));

    function updateRanger(val, index) {
      const newRanger = [...ranger.value];
      // todo handle cross
      if (val > maxPrice.value) val = maxPrice.value;
      if (!val || val < minPrice.value) val = minPrice.value;

      newRanger[index] = val;
      ranger.value = newRanger;
      console.log(newRanger);
    }

    return { ranger, marks, min, max };
  },
};
</script>
