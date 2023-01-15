<template>
  <div class="inner-container">
    <div class="inner-question">
      <div class="con-title"> MBTI 문항</div>
      <div class="con-contents">
        <div class="con-explain">
          개인이 쉽게 응답할 수 있는 자기보고서 문항을 통해 인식하고 판단할 때의 각자 선호하는 경향을 찾고, 이러한 선호 경향들이 인간의 행동에 어떠한 영향을 미치는가를 파악하여 실생활에 응용할 수 있도록 제작된 심리 검사
        </div>
      </div>
    </div>
    <div class="inner-main">
      <div class="inner-main-title">
        1. 당신은 어떤 슈퍼파워를 가지고 싶나요 ?
      </div>
      <ul class="main-select">
        <li>
          <input
              type="radio"
              name="pay"
              id="pay00"
          />
          <label for="pay00" class="select-text">
            <p>불노불사</p>
          </label>
        </li>
        <li>
          <input
              type="radio"
              name="pay"
              id="pay01"
          />
          <label for="pay01" class="select-text">
            <p>순간이동</p>
          </label>
        </li>
        <li>
          <input
              type="radio"
              name="pay"
              id="pay03"
          />
          <label for="pay01" class="select-text">
            <p>투명인간</p>
          </label>
        </li>
        <li>
          <input
              type="radio"
              name="pay"
              id="pay04"
          />
          <label for="pay01" class="select-text">
            <p>초싸이어인</p>
          </label>
        </li>
      </ul>
    </div>
    <!--설명란-->
    <div class="inner-main-title">
      위에서 하나만 설정하면 됩니다.
    </div>
    <button class="inner-confirm" @click="fnStartTest">
    </button>
  </div>
</template>


<script>
import { getCurrentInstance } from "vue";

export default {
  name : 'test-step1',
  description : 'Test 첫 페이지',
  setup() {
    const { proxy } = getCurrentInstance()
    const fnStartTest = () => {
      sessionStorage.setItem('step', '2')
      proxy.$emit('done')
    }

    return {
      fnStartTest
    }
  }
}
</script>

<style>
ul {
  padding: 1rem
}

li {
  list-style-type: none
}

.select-text {
  display: inline-block;
  margin: 0.5rem;
}

.inner-main {
  margin: 2rem 0.7rem;
}
</style>