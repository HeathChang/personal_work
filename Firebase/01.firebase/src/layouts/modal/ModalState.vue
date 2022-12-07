<template>
  <div v-if="modalState.isPopUp||modalState.isConfirm||modalState.isAlert" class="dimmer">
    <transition name="popup">
      <Popup
          v-if="modalState.isPopUp"
          :modalState="modalState"
      />
    </transition>
    <transition name="confirm">
      <Confirm
          v-if="modalState.isConfirm"
          :modalState="modalState"
      />
    </transition>
    <transition name="alert">
      <Alert
          v-if="modalState.isAlert"
          :modalState="modalState"
      />
    </transition>
  </div>
</template>

<script>
import Popup from "@/components/modal/popupContainer/Popup";
import Confirm from "@/components/modal/confirmContainer/Confirm";
import Alert from "@/components/modal/alertContainer/Alert";
export default {
  name: "ModalState",
  components:{
    Popup,
    Confirm,
    Alert
  },
  computed:{
    modalState(){
      return this.$store.getters['layout/getModalState']
    }
  }
}
</script>

<style>

.dimmer {
  position: fixed;
  z-index:2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
}


</style>