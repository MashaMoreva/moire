<template>
  <div class="loader">
    <p>{{ loadingText }}</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <rect
        fill="#E02D71"
        stroke="#E02D71"
        stroke-width="2"
        width="10"
        height="10"
        x="25"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="0.7"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        ></animate>
      </rect>
      <rect
        fill="#E02D71"
        stroke="#E02D71"
        stroke-width="2"
        width="10"
        height="10"
        x="85"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="0.7"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        ></animate>
      </rect>
      <rect
        fill="#E02D71"
        stroke="#E02D71"
        stroke-width="2"
        width="10"
        height="10"
        x="145"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="0.7"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        ></animate>
      </rect>
    </svg>
  </div>
</template>

<script>
export default {
  props: ['loadingText'],
};
</script>
