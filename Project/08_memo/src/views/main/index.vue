<template>
  <main>
    <section>
      <component-view-fitler-todo/>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline">Refresh</base-button>
          <base-button link to="/register">Register New Todo</base-button>
        </div>
        <ul>
          <li v-for="(item, index) in sample" :key="index">
            <h3 class="title" :class="fnStatus(item.priority)">{{ item.title }}</h3>
            <h4>{{ item.content }}</h4>
            <div>
              <base-badge v-for="area in item?.area" :key="area" :type="area" :title="area">하이</base-badge>
            </div>
            <div class="actions">
              <base-button mode="outline">Delete</base-button>
              <base-button>Done</base-button>
            </div>
          </li>
        </ul>
      </base-card>
    </section>
  </main>
</template>

<script>
import {useRouter} from 'vue-router'
import {getCurrentInstance} from 'vue'
import ComponentViewFitlerTodo from "@/components/views/filter/todo";

const sample = [
  {
    title: '숨쉬기',
    content: '가만히 앉아서 숨을 쉽니다.',
    priority: 3,
    area: ['morning', 'afternoon', 'evening'],
  }

]

export default {
  name: 'main-index',
  components: {ComponentViewFitlerTodo},

  description: '메인 인덱스',
  setup() {
    const {proxy} = getCurrentInstance()
    const router = useRouter()

    console.log(123, sample)

    const fnStatus = status => {
      console.log(status)
      switch(status){
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

    return {
      sample,
      fnStatus
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

.title{
}

.red {
  color: red
}
.orange{
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
