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
      <form class="modal-content rounded-3" @submit.prevent="handleSubmitForm">
        <div class="modal-header">
          <h5 class="modal-title">ĐẶT BÀN</h5>
        </div>
        <div class="modal-body">
          <template v-if="typeof errors === 'object'">
            <v-alert
              v-for="(error, index) in errors"
              :key="index"
              :counter="true"
              :message="error.join()"
              type="danger"
            />
          </template>
          <template v-if="typeof errors === 'string'">
            <v-alert :counter="true" :message="errors" type="danger" />
          </template>

          <date-picker
            v-model="date"
            :min-date="new Date()"
            mode="dateTime"
            locale="vi"
          >
            <template #default="{ inputValue, inputEvents }">
              <label class="exampleFormControlInput1">Thời gian đặt bàn</label>
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
                  class="form-control"
                  aria-label="Text input with checkbox"
                  :value="inputValue"
                  v-on="inputEvents"
                />
              </div>
            </template>
          </date-picker>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="rounded btn btn-secondary"
            @click="$router.go(-1)"
          >
            Trở lại
          </button>
          <v-button
            :loading="loading"
            type="submit"
            class="rounded btn btn-primary"
          >
            Chọn
          </v-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";
import { EV_SHOW_ORDER_TABLE_TIME, EV_ORDER_TABLE_TIME } from "@/constants";
import { ref } from "@vue/reactivity";
import { inject, watch } from "@vue/runtime-core";
import useTable from "@/services/reuseable/useTable";
import { useStore } from "vuex";
import { SET_TABLES } from "@/store/actionTypes";

export default {
  components: { DatePicker },

  setup() {
    const date = ref("");
    const emitter = inject("emitter");
    const show = ref(false);
    const { list: tables, loading, errors, getList } = useTable();

    emitter.on(EV_SHOW_ORDER_TABLE_TIME, (val) => (show.value = val));

    watch(show, (value) => {
      document.querySelector("body").classList.toggle("modal-open", value);
      date.value = value ? new Date() : "";
    });

    // handle get table map
    const store = useStore();

    async function handleSubmitForm() {
      await getList(date.value);

      if (errors.value) return store.dispatch(SET_TABLES, []);

      store.dispatch(SET_TABLES, tables.value);
      emitter.emit(EV_ORDER_TABLE_TIME, date.value);
      show.value = false;
    }

    return {
      date,
      show,
      loading,
      errors,
      handleSubmitForm,
    };
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
.exampleFormControlInput1 {
  color: gray;
  font-size: 125%;
}
.modal-title {
  margin-bottom: 1%;
  margin-left: 36%;
  color: gray;
  font-size: 25px;
}
.modal-dialog {
  border: 1.5px solid gray;
  border-radius: 0.5em 0.5em 0.5em;
  box-shadow: 0 5px 11px 0 rgb(0 0 0 / 50%), 0 4px 15px 0 rgb(0 0 0 / 50%);
}
</style>
