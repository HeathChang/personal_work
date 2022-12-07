<template>
  <form>
    <div class="form-control" :class="{invalid: false}">
      <label for="firstname">Title</label>
      <input
          type="text"
          id="title"
          v-model.trim="form.title"
      />
    </div>
    <div class="form-control" :class="{invalid: false}">
      <label for="lastname">Contents</label>
      <textarea
          style=" width: 100%; height: 6.25em;"
          type="text"
          id="lastname"
          v-model.trim="form.content"
      />
    </div>
    <div class="form-control" :class="{invalid:false}">
      <label for="rate">Priority</label>
      <input type="number" id="rate" v-model.number="form.priority"/>
    </div>
    <div class="form-control" :class="{invalid: false}">
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
    </div>
    <button
        @click.prevent.stop="!isModify ? fnRegister(): fnModify()">{{ !isModify ? 'Register' : 'Modify' }}
    </button>
  </form>
</template>

<script>
import {getCurrentInstance, onBeforeMount, onMounted, reactive, toRefs} from "vue";
import * as firebase from "firebase/firestore";

export default {
  name: 'coach-form',
  emits: ['save-data'],
  props: {
    isModify: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(props) {
    const {proxy} = getCurrentInstance();
    onMounted(() => {
      if (props.isModify) {
        fnMountData()
      }

    })
    const state = reactive({
      form: {
        title: '',
        content: '',
        area: [],
        isDone: false,
        priority: ''
      },
      formIsValid: true
    })


    // ADD
    const fnRegister = async () => {
      try {
        await firebase.addDoc(proxy.$todoCollection, state.form)
      } catch (e) {
        console.log(e)
      } finally {
        proxy.$router.go(0)
      }

    }

    //Read
    const fnMountData = async () => {
      const docRef = firebase.doc(proxy.$db, "todo", proxy.$route.params.id)
      const docSnap = await firebase.getDoc(docRef);
      state.fetchedData = {...docSnap.data()}
      state.form = state.fetchedData
    }

    //UPDATE
    const fnModify = async () => {
      const docRef = firebase.doc(proxy.$db, "todo", proxy.$route.params.id)
      try {
        await firebase.updateDoc(docRef, state.form);
        await proxy.$router.go(-1)
      } catch (e) {
        console.log(e)
      }
    }

    return {
      ...toRefs(state),
      fnRegister,
      fnModify
    }
  }
}
;
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