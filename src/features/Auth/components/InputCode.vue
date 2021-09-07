<template>
  <div ref="inputCode" class="row my-5 mx-0 otp">
    <div v-for="(item, index) in length" :key="index" class="col pr-1 pl-0">
      <input
        autofocus
        :value="code[index]"
        :class="[`form-control form-control-lg input-code${index}`]"
        type="number"
        @keydown.delete="clearCode"
        @input="updateCode(index, $event)"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
export default {
  props: {
    length: {
      type: Number,
      required: true,
    },

    modelValue: {
      type: String,
      required: true,
    },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const inputCode = ref(null);
    const code = computed({
      get: () => props.modelValue?.split("") || [],
      set: (code) => emit("update:modelValue", code.join("")),
    });

    function updateCode(index, event) {
      const { value } = event.target;
      const lastCharacter = value[value.length - 1];

      if (!lastCharacter) return;

      const newCode = [...code.value];
      newCode[index] = event.target.value = lastCharacter;
      code.value = newCode;
      pointerNavigation(true, index);
    }

    function clearCode() {
      if (!code.value.length) return;

      const newCode = [...code.value];
      newCode.pop();
      code.value = newCode;
      pointerNavigation(false, newCode.length);
    }

    function pointerNavigation(isIncrease, currentIndex) {
      let index = isIncrease ? ++currentIndex : --currentIndex;
      if (index >= props.length) index = props.length - 1;
      if (index <= 0) index = 0;
      inputCode.value?.querySelector(`.input-code${index}`)?.focus();
    }

    return { inputCode, code, clearCode, updateCode };
  },
};
</script>

<style></style>
