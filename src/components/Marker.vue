<template>
  <div>
    <div class="marker-item">
      <svg
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        version="1.1"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
      >
        <g transform="translate(0 -1028.4)">
          <path
            d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z"
            transform="translate(0 1028.4)"
            fill="#e74c3c"
          />
          <path
            d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z"
            transform="translate(0 1028.4)"
            fill="#c0392b"
          />
        </g>
      </svg>
      <div class="pulse-icon"></div>
    </div>
  </div>
</template>

<style scoped>
.marker-item {
  position: relative;
  transform: scale(1.5);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
  animation: scale 2s infinite;
}
.marker-item .pulse-icon {
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(7px, 3px);
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
}

@keyframes scale {
  0% {
    transform: scale(1.4);
  }

  70% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1.4);
  }
}
</style>
