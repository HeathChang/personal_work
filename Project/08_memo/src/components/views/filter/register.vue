<template>
  <form>
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstname">Title</label>
      <input
          type="text"
          id="title"
          v-model.trim="form.title"
      />
      <p v-if="!firstName.isValid">Firstname must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastname">Contents ({{form}})</label>
      <textarea
          style=" width: 100%; height: 6.25em;"
          type="text"
          id="lastname"
          v-model.trim="form.content"
      />
      <p v-if="!lastName.isValid">Lastname must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !rate.isValid}">
      <label for="rate">Priority</label>
      <input type="number" id="rate" v-model.number="form.priority"/>
      <p v-if="!rate.isValid">Rate must be greater than 0.</p>
    </div>
    <div class="form-control" :class="{invalid: !areas.isValid}">
      <h3>Areas</h3>
      <div>
        <input
            type="checkbox"
            id="frontend"
            value="0"
            v-model="form.area"
        />
        <label for="frontend">Morning</label>
      </div>
      <div>
        <input
            type="checkbox"
            id="backend"
            value="1"
            v-model="form.area"
        />
        <label for="backend">Afternoon</label>
      </div>
      <div>
        <input
            type="checkbox"
            id="career"
            value="2"
            v-model="form.area"
        />
        <label for="career">Evening</label>
      </div>
<!--      <p v-if="!areas.isValid">At least one expertise must be selected.</p>-->
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button @click.prevent.stop="fnRegister">Register</base-button>
  </form>
</template>

<script>
import {getCurrentInstance, reactive, toRefs} from "vue";
import useVuelidate from "@vuelidate/core";

export default {
  name: 'coach-form',
  emits: ['save-data'],
  setup() {
    const {proxy} = getCurrentInstance();

    const state = reactive({
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
      form: {
        title: '',
        content: '',
        area: [],
        isDone: false,
        priority: ''
      }
    })

    const rules = {
      title: {
        test: val => {
          console.log(val)
          if (proxy.$Util.isEmpty(val)) {
            console.log('title is null')
            return false;
          }
          return true;
        }

      }
    }

    const valid = useVuelidate(rules, state.form)

    const fnRegister = () => {
      valid.value.$touch()
      if (valid.value.$invalid) return false;
      proxy.$emit('save-data', state.form);
    }


    return {
      ...toRefs(state),
      fnRegister,
      valid
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>