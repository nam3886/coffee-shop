<template>
  <div
    class="modal fade"
    :class="{ 'd-block show': show }"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">Modal title</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="show = false"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01"
                >Options</label
              >
            </div>
            <select id="inputGroupSelect01" class="custom-select">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <date-picker v-model="date" class="inline-block h-full">
            <template #default="{ inputValue, togglePopover }">
              <div class="input-group mb-3" @click="togglePopover">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <svg
                      class="datepicker"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  :value="inputValue"
                  class="form-control"
                  aria-label="Text input with checkbox"
                />
              </div>
            </template>
          </date-picker>

          <date-picker v-model="date" class="inline-block h-full">
            <template #default="{ inputValue, togglePopover }">
              <div class="input-group mb-3" @click="togglePopover">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <svg
                      class="datepicker"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  :value="inputValue"
                  class="form-control"
                  aria-label="Text input with checkbox"
                />
              </div>
            </template>
          </date-picker>

          <textarea class="customernote">
 
              yeu cau khach hang 123
          </textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="show = false">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";

export default {
  components: {
    DatePicker,
  },

  data() {
    return {
      show: false,
      date: "",
      masks: {
        input: "YYYY-MM-DD h:mm A",
      },
    };
  },

  watch: {
    show(show) {
      const body = document.querySelector("body");
      body.classList.toggle("modal-open", show);
      body.classList.toggle("fixed-bottom-bar", show);
    },
  },

  mounted() {
    this.$EMITTER.on("show-order-table", (table) => {
      this.show = true;
      console.log(table);
    });
  },
};
</script>
<style scoped>
.datepicker {
  width: 19px;
}
.customernote {
  width: 100%;
}
</style>
