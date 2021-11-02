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
      <form
        class="modal-content rounded-3"
        @submit.prevent="handleSubmitOrderTable"
      >
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">ĐẶT BÀN</h5>
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
          <v-alert
            v-for="(error, index) in errors"
            :key="index"
            :counter="true"
            :message="error.join()"
            type="danger"
          />

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

          <label class="exampleFormControlInput1">Số khách đặt bàn</label>
          <div class="input-group mb-3">
            <select
              id="inputGroupSelect01"
              v-model.number="form.person_number"
              class="custom-select"
              placeholder="Chọn số lượng"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <label class="exampleFormControlInput1">Yêu cầu của khách hàng</label>
          <textarea
            v-model="form.note"
            class="form-control"
            rows="3"
            placeholder="Yêu cầu thêm ..."
            aria-label="Yêu cầu thêm ..."
            aria-describedby="addon-wrapping"
          ></textarea>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="rounded btn btn-secondary"
            @click="show = false"
          >
            Hủy
          </button>
          <v-button
            :loading="loading"
            type="submit"
            class="rounded btn btn-primary"
          >
            Đặt bàn
          </v-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";
import { EV_SHOW_ORDER_TABLE } from "@/constants";
import { ref } from "@vue/reactivity";
import { inject, watch } from "@vue/runtime-core";
import useTable from "@/services/reuseable/useTable";

export default {
  components: { DatePicker },

  setup() {
    const isValidTable = ref(false);
    const date = ref("");
    const emitter = inject("emitter");
    const show = ref(false);
    const { form, loading, store, checkTable, errors } = useTable();

    watch(date, handleCheckTable);

    watch(show, (value) => {
      document.querySelector("body").classList.toggle("modal-open", value);
      isValidTable.value = value;
      date.value = value ? new Date() : "";
    });

    emitter.on(EV_SHOW_ORDER_TABLE, (table) => {
      show.value = true;
      form.table_id = table;
    });

    async function handleSubmitOrderTable() {
      if (!isValidTable.value) return;

      await store(date.value);

      if (errors.value) return;

      alert("đặt bàn thành công");
      show.value = false;
    }

    async function handleCheckTable() {
      if (!date.value) return;
      isValidTable.value = false;

      await checkTable(date.value);

      if (errors.value) return;

      isValidTable.value = true;
    }

    return {
      date,
      show,
      form,
      loading,
      isValidTable,
      errors,
      handleSubmitOrderTable,
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
