<template>
  <main>
    <section>
      <component-view-fitler-todo/>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="fnRefresh">Refresh</base-button>
          <base-button @click="fnTabOpen">Register New Todo ({{isTabOpen}})</base-button>
        </div>
        <ul>
          <section v-show="isTabOpen === true">
            <base-card>
              <coach-form @save-data="fnRegister"></coach-form>
            </base-card>
          </section>


          <li v-for="(item, index) in fetchedList" :key="index">
            <h3 class="title" :class="fnStatus(item.priority)" :style="item.isDone === true ?  'text-decoration: line-through' : ''">{{ item.title }}</h3>
            <h4 :style="item.isDone === true ?  'text-decoration: line-through' : ''">{{ item.content }}</h4>
            <div>
              <base-badge :type="item.area" :area="item.area"></base-badge>
            </div>
            <div class="actions">
              <base-button mode="outline">Delete</base-button>
              <base-button>
                {{
                  item.isDone === true ?  'Un-Done' : 'Done'
                }}
              </base-button>
            </div>
          </li>
        </ul>
      </base-card>
    </section>
  </main>
</template>

<script>
import {useRouter} from 'vue-router'
import {getCurrentInstance, onMounted, reactive, toRefs} from 'vue'
import ComponentViewFitlerTodo from "@/components/views/filter/todo";
import CoachForm from "@/components/views/filter/register";


export default {
  name: 'main-index',
  components: {CoachForm, ComponentViewFitlerTodo},

  description: '메인 인덱스',
  setup() {
    const {proxy} = getCurrentInstance()
    const state = reactive({
      fetchedList: [],
      isTabOpen: false
    })
    onMounted(() => {
      fnMountedData()
    })

    const fnMountedData = async () => {
      console.log('onMouted')
      const res = await proxy.$MemoSvc.fetchData()
      state.fetchedList = {...res.data}
    }

    const fnRefresh = () => {
      state.fetchedList = [];
      fnMountedData();
    }

    const fnTabOpen = () => {
      state.isTabOpen = !state.isTabOpen
    }



    const fnStatus = status => {
      console.log(status)
      switch (status) {
        case 1:
          return 'red';
        case 2:
          return 'orange'
        case 3:
          return 'green'
        case 4:
          return 'blue'

      }

    }

    const fnRegister = (formData) => {
      console.log("formData:: ", formData)
    }

    return {
      ...toRefs(state),
      fnStatus,
      fnRefresh,
      fnTabOpen,
      fnRegister
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

.title {
}

.red {
  color: red
}

.orange {
  color: orange;
}

.green {
  color: green
}

.blue {
  color: blue
}


h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
