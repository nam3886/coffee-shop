<template>
  <div class="col-md-4">
    <div
      class="
        osahan-cart-item
        rounded rounded
        shadow-sm
        overflow-hidden
        bg-white
        sticky_sidebar
      "
    >
      <div class="d-flex border-bottom osahan-cart-item-profile bg-white p-3">
        <img
          alt="osahan"
          src="img/starter1.jpg"
          class="mr-3 rounded-circle img-fluid"
        />
        <div class="d-flex flex-column">
          <h6 class="mb-1 font-weight-bold">Nhà Hàng Nam & Khánh</h6>
          <p class="mb-0 small text-muted">
            <i class="feather-map-pin"></i> 1 Võ văn Ngân, Thủ Đức, TP.HCM
          </p>
        </div>
      </div>
      <div class="bg-white border-bottom py-2">
        <div
          v-for="cart in $store.getters.getCart.items"
          :key="cart.id"
          class="
            gold-members
            d-flex
            align-items-center
            justify-content-between
            px-3
            py-2
          "
        >
          <div class="media align-items-center">
            <div class="mr-2 text-success">&middot;</div>
            <div class="media-body">
              <p class="m-0">
                {{ cart.product.name }}
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="count-number float-right">
              <input-quantity :cart="cart" />
            </span>
            <p class="text-gray mb-0 float-right ml-2 text-muted small">
              {{ cart.subtotal_format }}
            </p>
            <button-delete-cart :cart-id="cart.id" class="ml-2 text-danger">
              <i class="feather-x-circle"></i>
            </button-delete-cart>
          </div>
        </div>
      </div>
      <div class="bg-white p-3 py-3 border-bottom clearfix">
        <div class="input-group-sm mb-2 input-group">
          <input
            placeholder="Nhập mã giảm giá"
            type="text"
            class="form-control"
          />
          <div class="input-group-append">
            <button type="button" class="btn btn-primary">
              <i class="feather-percent"></i> Xác nhận
            </button>
          </div>
        </div>
        <div class="mb-0 input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"
              ><i class="feather-message-square"></i
            ></span>
          </div>
          <textarea
            placeholder="Ý kiến của khách hàng..."
            aria-label="With textarea"
            class="form-control"
          ></textarea>
        </div>
      </div>
      <div class="bg-white p-3 clearfix border-bottom">
        <!-- <p class="mb-1">
          Tổng tiền <span class="float-right text-dark">$3140</span>
        </p>
        <p class="mb-1">
          Phí dịch vụ
          <span class="float-right text-dark">$62.8</span>
        </p>

        <p class="mb-1 text-success">
          Tổng giảm giá<span class="float-right text-success">$1884</span>
        </p>
        <hr /> -->
        <h6 class="font-weight-bold mb-0">
          Thực thu
          <span class="float-right">
            {{ $store.getters.getCart.total }}
          </span>
        </h6>
      </div>
      <div class="p-3">
        <a class="btn btn-success btn-block btn-lg" href="successful.html">
          Thực thu {{ $store.getters.getCart.total }}
          <i class="feather-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDeleteCart from "@/components/ButtonDeleteCart";
import InputQuantity from "@/components/InputQuantity";

export default {
  components: {
    ButtonDeleteCart,
    InputQuantity,
  },
};
</script>
