<template>
  <input
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :class="inputClasses"
    :maxlength="maxLength"
    :ref="ref"
    @input="updateValue"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>
<script>
import { reactive } from 'vue'
export default {
  name: 'base-input',
  props: {
    inputClasses: {
      type: String,
      description: 'Input css classes'
    },
    value: {
      type: [String, Number],
      description: 'Input value'
    },
    ref: {
      type: String,
      description: 'Input value'
    },
    type: {
      type: String,
      description: 'Input type',
      default: 'text'
    },
    placeholder: {
      type: String,
      description: 'placeholder'
    },
    maxLength: {
      type: Number,
      description: 'Limited Max Length'
    }
  },
  emits: ['input', 'focus', 'blur', 'update:value'],
  setup(props, { emit }) {
    const state = reactive({
      focused: false
    })

    const updateValue = evt => {
      const value = evt.target.value
      emit('input', value)
    }

    const onFocus = evt => {
      state.focused = true
      emit('focus', evt)
    }

    // const updateValue = event => {
    //   emit('update:value', event.target.value)
    // }

    const onBlur = evt => {
      state.focused = false
      emit('blur', evt)
    }

    return { onFocus, onBlur, updateValue }
  }
}
</script>
<style></style>
