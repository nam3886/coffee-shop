<template>
  <form
    ref="modalFilter"
    :class="{ 'd-block show': show }"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalFilterLabel"
    aria-hidden="true"
    @submit.prevent="handleSubmitFilter"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Bộ lọc</h5>
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
              <div
                v-for="(sort, index) in sorts"
                :key="index"
                class="custom-control border-bottom px-0 custom-radio"
              >
                <input
                  :id="`sort${index}`"
                  v-model="filters.sort"
                  :value="sort.id"
                  type="radio"
                  name="sort"
                  class="custom-control-input"
                />
                <label
                  class="custom-control-label py-3 w-100 px-3"
                  :for="`sort${index}`"
                >
                  {{ sort.name }}
                </label>
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
                <RangerPrice v-model="filters.price" />
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
            <button type="submit" class="btn btn-primary btn-lg btn-block">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { EV_SHOW_FILTER } from "@/constants";
import { inject, ref, watch } from "@vue/runtime-core";
import RangerPrice from "@/components/RangerPrice";
import { useRouter } from "vue-router";

export default {
  components: { RangerPrice },

  setup() {
    const router = useRouter();
    const emitter = inject("emitter");
    const show = ref(false);

    emitter.on(EV_SHOW_FILTER, () => (show.value = true));

    watch(show, (val) => {
      const body = document.querySelector("body");
      body.classList.toggle("modal-open", val);
    });

    const sorts = ref([
      { id: "-price", name: "Giá từ cao tới thấp" },
      { id: "price", name: "Giá từ thấp tới cao" },
      { id: "name", name: "Tên A-Z" },
      { id: "-name", name: "Tên Z-A" },
      // { id: "popular", name: "Phổ biến nhất" },
      // { id: "most_sale", name: "Được đánh giá cao" },
    ]);

    const filters = ref({ price: [0, 30] });

    function handleSubmitFilter() {
      show.value = false;
      router.push({ name: "product", query: filters.value });
    }

    return { show, sorts, filters, handleSubmitFilter };
  },
};
</script>
