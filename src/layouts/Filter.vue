<template>
  <div
    ref="modalFilter"
    :class="{ 'd-block show': show }"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalFilterLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Filter</h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="show = false"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-0">
          <div class="osahan-filter">
            <div class="filter">
              <!-- SORT BY -->
              <div class="p-3 bg-light border-bottom">
                <h6 class="m-0">Sắp xếp theo:</h6>
              </div>
              <div class="custom-control border-bottom px-0 custom-radio">
                <input
                  id="customRadio1f"
                  type="radio"
                  name="location"
                  class="custom-control-input"
                  checked
                />
                <label
                  class="custom-control-label py-3 w-100 px-3"
                  for="customRadio1f"
                  >Được đánh giá cao</label
                >
              </div>
              <div class="custom-control border-bottom px-0 custom-radio">
                <input
                  id="customRadio2f"
                  type="radio"
                  name="location"
                  class="custom-control-input"
                />
                <label
                  class="custom-control-label py-3 w-100 px-3"
                  for="customRadio2f"
                  >Gần tôi nhất</label
                >
              </div>
              <div class="custom-control border-bottom px-0 custom-radio">
                <input
                  id="customRadio3f"
                  type="radio"
                  name="location"
                  class="custom-control-input"
                />
                <label
                  class="custom-control-label py-3 w-100 px-3"
                  for="customRadio3f"
                  >Giá từ cao tới thấp</label
                >
              </div>
              <div class="custom-control border-bottom px-0 custom-radio">
                <input
                  id="customRadio4f"
                  type="radio"
                  name="location"
                  class="custom-control-input"
                />
                <label
                  class="custom-control-label py-3 w-100 px-3"
                  for="customRadio4f"
                  >Giá từ thấp tới cao</label
                >
              </div>
              <div class="custom-control border-bottom px-0 custom-radio">
                <input
                  id="customRadio5f"
                  type="radio"
                  name="location"
                  class="custom-control-input"
                />
                <label
                  class="custom-control-label py-3 w-100 px-3"
                  for="customRadio5f"
                  >Phổ biến nhất</label
                >
              </div>
              <!-- Filter -->
              <div class="p-3 bg-light border-bottom">
                <h6 class="m-0">Lọc thêm</h6>
              </div>
              <div class="custom-control border-bottom px-0 custom-checkbox">
                <input
                  id="defaultCheck1"
                  type="checkbox"
                  class="custom-control-input"
                  checked
                />
                <label
                  class="custom-control-label py-3 w-100 px-3"
                  for="defaultCheck1"
                  >Đang mở</label
                >
              </div>
              <div class="custom-control border-bottom px-0 custom-checkbox">
                <input
                  id="defaultCheck2"
                  type="checkbox"
                  class="custom-control-input"
                />
                <label
                  class="custom-control-label py-3 w-100 px-3"
                  for="defaultCheck2"
                  >Thanh toán bằng thẻ tín dụng</label
                >
              </div>
              <div class="custom-control border-bottom px-0 custom-checkbox">
                <input
                  id="defaultCheck3"
                  type="checkbox"
                  class="custom-control-input"
                />
                <label
                  class="custom-control-label py-3 w-100 px-3"
                  for="defaultCheck3"
                  >Có phục vụ rượu</label
                >
              </div>
              <!-- Filter -->
              <div class="p-3 bg-light border-bottom">
                <h6 class="m-0">Lọc thông thường</h6>
              </div>
              <div class="px-3 pt-3">
                <input
                  type="range"
                  class="custom-range"
                  min="0"
                  max="100"
                  name="minmax"
                />
                <div class="form-row">
                  <div class="form-group col-6">
                    <label>Thấp nhất</label>
                    <input
                      class="form-control"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                  <div class="form-group text-right col-6">
                    <label>Cao nhất</label>
                    <input
                      class="form-control"
                      placeholder="$1,0000"
                      type="number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer p-0 border-0">
          <div class="col-6 m-0 p-0">
            <button
              type="button"
              class="btn border-top btn-lg btn-block"
              @click="show = false"
            >
              Đóng
            </button>
          </div>
          <div class="col-6 m-0 p-0">
            <button type="button" class="btn btn-primary btn-lg btn-block">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EV_SHOW_FILTER } from "@/constants";

export default {
  data() {
    return {
      show: false,
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
    this.$EMITTER.on(EV_SHOW_FILTER, () => (this.show = true));
  },
};
</script>

<style></style>
