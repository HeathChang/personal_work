<template>
  <form style="display: flex ; justify-content: space-evenly">
    <section class="login-section">
      <div class="form-control">
        <label for="firstname">ID</label>
        <input
            type="text"
            id="id"
            v-model.trim="form.id"
        /></div>
      <div class="form-control">
        <label for="firstname">PW</label>
        <input
            type="password"
            id="password"
            v-model.trim="form.password"
        /></div>
      <button style="margin-left: 7rem" @click.prevent.stop="fnLogin"> Log in</button>
    </section>


    <!--    <section>-->
    <!--      <div style="border-left: 6px solid purple; height: 500px;"></div>-->
    <!--    </section>-->
    <!--    <section class="login-section">-->
    <!--      <div class="form-control" style="align-content: space-around; display: grid">-->
    <!--        <button> Login with A</button>-->
    <!--        <button> Login with B</button>-->
    <!--        <button> Login with C</button>-->
    <!--      </div>-->
    <!--    </section>-->


  </form>
</template>


<script>
import {computed, getCurrentInstance, onMounted, reactive, toRefs} from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default {
  name: 'login-index',
  description: 'This is a main page',
  setup() {
    const {proxy} = getCurrentInstance();
    const state = reactive({
      form: {
        id: '',
        password: ''
      },
      userData:  computed(()=> proxy.$store.getters['user/getUserData']),
      isLoggedIn:  computed(()=> proxy.$store.getters['user/getIsLoggedIn'])
    })


    const fnLogin = async () => {
      try {
        const auth = getAuth();
        const res = await signInWithEmailAndPassword(auth, 'tester@miror.net', '1234qwer!')
        const userData = {};
        const stsTokenManager = {};
        stsTokenManager.refreshToken = res.user.stsTokenManager.refreshToken;
        stsTokenManager.accessToken = res.user.stsTokenManager.accessToken;
        await proxy.$store.dispatch('user/asyncAuthorization', stsTokenManager)
        userData.userEmail = res.user.email;
        userData.userNickname = res.user.email.split("@")[0];
        await proxy.$store.dispatch('user/asyncUserData', {userData})
        location.reload();
      } catch (e) {
        console.log(e)
      }
    }


    return {
      ...toRefs(state),
      fnLogin
    }
  }
}

</script>

<style scoped>
button {
  width: 10rem;
}

.form-control {
  margin: 2rem;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 20rem;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font: inherit;
}

.is-divider-vertical::before {
  border-color: #555;
}

.is-divider-vertical[data-content]::after, .is-divider[data-content]::after {
  color: #555;
}

</style>