<template>
  <!-- <div
    class="modal fade"
    :class="{ 'd-block show': show }"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  > -->
  <div class="modal-dialog" role="document">
    <form class="modal-content rounded-3" @submit.prevent="submitOrderTable">
      <div class="modal-header">
        <h5 id="exampleModalLabel" class="modal-title">THỜI GIAN ĐẶT BÀN</h5>
        <!-- <button
          type="button"
          class="close"
          aria-label="Close"
          @click="show = false"
        >
          <span aria-hidden="true">&times;</span>
        </button> -->
      </div>
      <div class="modal-body">
        <!-- <label class="exampleFormControlInput1">Số khách đặt bàn</label> -->
        <!-- <div class="input-group mb-3">
          <select
            id="inputGroupSelect01"
            v-model.number="orderTable.personNumber"
            class="custom-select"
            placeholder="Chọn số lượng"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div> -->

        <date-picker
          v-model="orderTable.date"
          mode="dateTime"
          :timezone="timezone"
        >
          <template #default="{ inputValue, inputEvents }">
            <!-- <label class="exampleFormControlInput1">Thời gian đặt bàn</label> -->
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
        <button type="submit" class="rounded btn btn-primary">Lưu</button>
        <!-- <label class="exampleFormControlInput1">Yêu cầu của khách hàng</label>
        <textarea
          v-model="orderTable.note"
          class="form-control"
          rows="3"
          placeholder="Yêu cầu thêm ..."
          aria-label="Yêu cầu thêm ..."
          aria-describedby="addon-wrapping"
        ></textarea> -->
      </div>
      <!-- <div class="modal-footer">
        <button
          type="button"
          class="rounded btn btn-secondary"
          @click="show = false"
        >
          Hủy
        </button>
        <button type="submit" class="rounded btn btn-primary">Lưu</button>
      </div> -->
    </form>
  </div>
  <!-- </div> -->
</template>

<script>
import { DatePicker } from "v-calendar";
import { EV_SHOW_ORDER_TABLE } from "@/constants";

export default {
  components: {
    DatePicker,
  },

  data() {
    return {
      show: false,
      timezone: "",
      orderTable: {
        // date: null,
        // table: null,
        // note: null,
        // personNumber: null,
      },
    };
  },

  watch: {
    show(show) {
      console.log("trigger show");
      const body = document.querySelector("body");
      body.classList.toggle("modal-open", show);
    },
  },

  mounted() {
    this.$EMITTER.on(EV_SHOW_ORDER_TABLE, (table) => {
      this.show = true;
      this.orderTable.table = table;
    });
  },

  methods: {
    submitOrderTable() {
      this.show = false;
      console.log(this.orderTable);
    },
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
  color: #e23744;
  font-size: 15px;
}
.modal-dialog {
  border: 1.5px solid orange;
  /* border-radius: 0.5em 0.5em 0.5em;
  box-shadow: 0 5px 11px 0 rgb(0 0 0 / 50%), 0 4px 15px 0 rgb(0 0 0 / 50%); */
}
.modal-header {
  padding: 1%;
  border-block-end: 1.5px solid orange;
  border-radius: 0em 0em 0em;
  background-color: white;
}
.form-control {
  color: #e23744;
  border: 1px solid #e23744;
}
.input-group-text {
  color: #e23744;
  border: 1px solid #e23744;
  background-color: whitesmoke;
}
/* .modal-footer {
  border-block-start: 1.5px solid orange;
  border-radius: 0em 0em 0em;
} */
.rounded.btn.btn-primary {
  width: 25%;
  margin-inline-start: 38%;
}
</style>
