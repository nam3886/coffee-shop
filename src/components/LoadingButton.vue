<template>
  <button
    type="button"
    class="button"
    onclick="this.classList.toggle('button--loading')"
    data-loading-text="Loading "
  >
    <span class="button__text">Lưu</span>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  position: relative;
  padding: 8px 16px;
  background: #dc3545;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 90%;
  margin-bottom: 3%;
}

.button:active {
  background: #dc3545;
}

.button__text {
  font: bold 20px "Quicksand", san-serif;
  color: #ffffff;
  transition: all 0.2s;
}

.button--loading .button__text {
  visibility: hidden;
  opacity: 0;
}

.button--loading::after {
  content: "loading...";
  font-size: 15px;
  font: bold 15px "Quicksand", san-serif;
  color: #ffffff;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0px;
  left: 0px;
  right: 38px;
  bottom: 5px;
  margin: auto;
  /* border: 3px solid transparent;    //spinner round
  border-top-color: #ffffff; */
  /* border-radius: 50%; */
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
