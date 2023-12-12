<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <BaseFormField :title="title" :error="error">
    <textarea
      class="form__input form__input--area"
      type="text"
      :placeholder="placeholder"
      v-model="dataValue"
    ></textarea>
  </BaseFormField>
</template>
<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  mixins: [formFieldMixin],
};
</script>
