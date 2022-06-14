<template>
  <div class="inner-container">
    <div class="inner-main-question">
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
  </div>
</template>


<script>
export default {
  name: 'test-step2'
}
</script>

<style>

</style>