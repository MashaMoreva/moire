<template>
  <ul class="colors colors--black">
    <li class="colors__item" v-for="color in colors" :key="color.id">
      <label class="colors__label">
        <input
          class="colors__radio sr-only"
          type="radio"
          :value="color.color.code"
          v-model="currentColor"
          @change="changeColor(color.color.code)"
        />
        <span
          class="colors__value"
          :style="{ 'background-color': color.color.code }"
        >
        </span>
      </label>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['colors'],
  data() {
    return {
      currentColor: this.colors[0].color.code,
    };
  },
  methods: {
    changeColor(colorCode) {
      this.currentColor = colorCode;
      this.$emit('colorChanged', colorCode);
    },
  },
};
</script>
