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
                <h6 class="m-0">SORT BY</h6>
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
                  >Top Rated</label
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
                  >Nearest Me</label
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
                  >Cost High to Low</label
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
                  >Cost Low to High</label
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
                  >Most Popular</label
                >
              </div>
              <!-- Filter -->
              <div class="p-3 bg-light border-bottom">
                <h6 class="m-0">FILTER</h6>
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
                  >Open Now</label
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
                  >Credit Cards</label
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
                  >Alcohol Served</label
                >
              </div>
              <!-- Filter -->
              <div class="p-3 bg-light border-bottom">
                <h6 class="m-0">ADDITIONAL FILTERS</h6>
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
                    <label>Min</label>
                    <input
                      class="form-control"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                  <div class="form-group text-right col-6">
                    <label>Max</label>
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
              Close
            </button>
          </div>
          <div class="col-6 m-0 p-0">
            <button type="button" class="btn btn-primary btn-lg btn-block">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    this.$EMITTER.on("show-filter", () => (this.show = true));
  },
};
</script>

<style></style>
