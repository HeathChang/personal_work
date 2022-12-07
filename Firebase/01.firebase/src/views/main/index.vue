<template>
  <main>
    <section>
      <component-view-fitler-todo/>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <button class="outline"><span @click="fnRefresh">Refresh</span></button>
          <button @click="fnTabOpen">
            Register New Todo
          </button>
        </div>
        <ul>
          <section v-show="isTabOpen === true">
            <base-card>
              <coach-form/>
            </base-card>
          </section>
          <li v-for="(item, index) in fetchedData" :key="index">
            <!--            {{ item }}-->
            <h3 class="title">{{ item.title }} </h3>
            <h4>{{ item.content }}</h4>
            <h5>priority: {{ item.priority }}</h5>
            <div>
              <base-badge :type="item.area" :area="item.area"></base-badge>
            </div>
            <section>
              <!--              <coach-form :isModify="true" :item="item"/>-->
            </section>
            <div class="actions">
              <button mode="outline" @click="fnModify(item)">Modify</button>
              <button @click="fnDone(item)">
                {{
                  item.isDone === true ? 'Un-Done' : 'Done'
                }}
              </button>
            </div>
          </li>
        </ul>
      </base-card>
    </section>
  </main>
</template>


<script>
import {getCurrentInstance, onMounted, reactive, toRefs} from "vue";
import * as firebase from "firebase/firestore";
import CoachForm from "@/components/views/filter/register.vue";
import ComponentViewFitlerTodo from "@/components/views/filter/todo.vue";


export default {
  name: 'main-index',
  components: {ComponentViewFitlerTodo, CoachForm},
  description: 'This is a main page',
  setup() {
    const {proxy} = getCurrentInstance();
    const state = reactive({
      fetchedData: [],
      isTabOpen: false
    })

    onMounted(() => {
      fnMountData()
    })

    // READ
    const fnMountData = async () => {
      const q = await firebase.query(proxy.$todoCollection)
      const data = await firebase.getDocs(q)
      data.docs.map(item => {
        state.fetchedData.push({...item.data(), id: item.id})
      })
    }

    const fnRefresh = () => {
      state.fetchedData = [];
      fnMountData();
    }

    const fnTabOpen = () => {
      state.isTabOpen = !state.isTabOpen
    }


    // DELETE
    const fnDone = async item => {
      const doc = firebase.doc(proxy.$db, "todo", item.id)
      try {
        await firebase.deleteDoc(doc);
        await proxy.$router.go(0)
      } catch (e) {
        console.log(e)
      }
    }

    const fnModify = item => {
      console.log(123, proxy.$router)
      proxy.$router.push({
        name: 'modify-index',
        params: {
          id: item.id
        }
      })
    }

    return {
      ...toRefs(state),
      fnRefresh,
      fnTabOpen,
      fnDone,
      fnModify
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
