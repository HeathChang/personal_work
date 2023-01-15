<template>
  <header class="header" style="display: flex">
      <h1>{{ title }} {{ isLoggedIn }}</h1>
      <button class="login-button" @click.prevent.stop="fnLogin" v-show="!isLoggedIn">Login</button>
      <button class="login-button" @click.prevent.stop="fnLogout" v-show="isLoggedIn">Logout</button>
    <div v-show="isLoggedIn" >
      <img v-show="imageUrl" :src="imageUrl" height="40" style="border-radius: 2rem; border: red solid ;" />
      <input type="file"  @change="fnChangeImage($event)"/>
<!--      <input  type="file" @change="onFileChange($event)"/>-->

    </div>
  </header>
</template>


<script>
import {reactive, toRefs, getCurrentInstance, computed, onMounted} from "vue";
import { getAuth, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  name: 'HeaderLayout',
  description: 'This is a main page',
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      title: 'Memo App',
      isLoggedIn:  computed(()=> proxy.$store.getters['user/getIsLoggedIn']),
      imageUrl: '',
      image:{
        files: [],
        url: null,
        uploadedFiles: []
      }
    })

    onMounted(() => {
      fnMountImage()
    })



    const fnLogin = async () => {
      proxy.$router.push({
        name: 'login-index'
      })
    }

    const fnLogout = async () => {
      try{
        console.log('log-out btn')
        const auth = getAuth();
        const res = await signOut(auth)
        await proxy.$store.dispatch('user/logOut')
        proxy.$router.go(0)
      } catch (e){
        console.log(e)
      }
    }


    const fnMountImage = async  () => {
      const storage = getStorage();
      const imageRef = ref(storage, 'storage/image')
      const url = await getDownloadURL(imageRef)
      state.imageUrl = url
    }

    const fnChangeImage = async event => {
      let file = event.target.files[0];
      state.image.files.push(URL.createObjectURL(new Blob([new ArrayBuffer(file)], { type: "image/png" })))
      const storage = getStorage();
      const storageRef = ref(storage, 'storage/image');
      await uploadBytes(storageRef, file)
      proxy.$router.go(0)
    }


    return {
      ...toRefs(state),
      fnLogin,
      fnLogout,
      fnChangeImage
    }
  }
}

</script>

<style scoped>
header {
  display: flex !important;
  justify-content: space-between !important;
}
.login-button {
  all: unset;
  margin-right: 1rem
}
</style>