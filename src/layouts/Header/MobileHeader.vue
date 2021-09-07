<template>
  <div class="bg-primary p-3 d-none">
    <div class="text-white">
      <div class="title d-flex align-items-center">
        <a class="toggle-navigation" href="#">
          <span></span>
        </a>
        <h4 class="font-weight-bold m-0 pl-5">Browse</h4>
        <a
          class="text-white font-weight-bold ml-auto"
          data-toggle="modal"
          href="#"
          @click.prevent="$EMITTER.emit('show-filter')"
        >
          Filter
        </a>
      </div>
    </div>
    <div class="input-group mt-3 rounded shadow-sm overflow-hidden">
      <div class="input-group-prepend">
        <button
          class="
            border-0
            btn btn-outline-secondary
            text-dark
            bg-white
            btn-block
          "
        >
          <i class="feather-search"></i>
        </button>
      </div>
      <input
        type="text"
        class="shadow-none border-0 form-control"
        placeholder="Search for restaurants or dishes"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
