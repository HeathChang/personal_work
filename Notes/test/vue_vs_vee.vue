<template>
  <form>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name">
      <!-- Vee-validate syntax -->
      <span>{{ errors.first('name') }}</span>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email">
      <!-- Vuelidate syntax -->
      <span>{{ $v.email.$error }}</span>
    </div>
  </form>
</template>

<script>
import { defineComponent } from 'vue'
import { useForm, useValidate } from 'vee-validate'
import { useVuelidate } from '@vuelidate/core'
import * as yup from 'yup'

export default defineComponent({
  name: 'MyForm',
  setup() {
    // Vee-validate configuration
    const { handleSubmit, errors } = useForm()
    const schema = yup.object({
      name: yup.string().required(),
    })
    useValidate(schema)

    // Vuelidate configuration
    const { $v } = useVuelidate({
      email: {
        required,
        email,
      },
    })

    // Form data
    const name = ref('')
    const email = ref('')

    // Form submit handler
    const submit = () => {
      if ($v.$invalid) {
        // Vuelidate error handling
        console.log('Form has errors')
      } else {
        // Vee-validate submit handling
        console.log('Form submitted successfully')
      }
    }

    return {
      name,
      email,
      handleSubmit,
      errors,
      submit,
    }
  },
})
</script>