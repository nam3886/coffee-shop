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
import { EV_SHOW_ORDER_TABLE, EV_ORDER_TABLE_TIME } from "@/constants";
import { ref } from "@vue/reactivity";
import { inject, watch } from "@vue/runtime-core";
import useTable from "@/services/reuseable/useTable";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const emitter = inject("emitter");
    const show = ref(false);
    const date = ref(null);
    const { form, loading, store, errors } = useTable();

    watch(show, (value) => {
      document.querySelector("body").classList.toggle("modal-open", value);
    });

    emitter.on(EV_ORDER_TABLE_TIME, (val) => (date.value = val));

    emitter.on(EV_SHOW_ORDER_TABLE, (table) => {
      show.value = true;
      form.table_id = table;
    });

    async function handleSubmitOrderTable() {
      await store(date.value);

      if (errors.value) return;

      alert("đặt bàn thành công");
      show.value = false;
      router.push({ name: "order_table.index" });
    }

    return {
      show,
      form,
      loading,
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
