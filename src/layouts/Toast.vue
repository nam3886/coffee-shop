<template>
  <div class="toaster">
    <div class="position-absolute">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <i class="feather-shopping-bag h6 mr-2 mb-0"></i>
          <strong class="mr-auto">{{ message.title }}</strong>
          <small class="ml-2 text-muted">{{ message.time }}</small>
          <button
            type="button"
            class="ml-2 mb-1 close outline-none"
            data-dismiss="toast"
            aria-label="Close"
            @click="removeMessage(index)"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">{{ message.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { inject, onMounted } from "@vue/runtime-core";
import { wait } from "@/helpers";

export default {
  setup() {
    const defaultTime = 2000; // seconds
    const messages = reactive([]);
    const emitter = inject("emitter");
    onMounted(() => emitter.on("toast", (message) => addMessage(message)));

    function addMessage(message) {
      const now = new Date();
      messages.push({ ...message, time: now.toLocaleTimeString() });
      // remove first message if total messages >= 3
      messages.length >= 3 && removeMessage(0);
      wait(defaultTime).then(() => removeMessage(messages.length - 1));
    }

    function removeMessage(index) {
      messages.splice(index, 1);
    }

    return { messages, removeMessage };
  },
};
</script>

<style scoped>
.toaster {
  position: fixed;
  top: 50%;
  left: 4px;
  right: 0;
  z-index: 1000000000000;
}
.toaster .toast {
  opacity: 1;
}
</style>
