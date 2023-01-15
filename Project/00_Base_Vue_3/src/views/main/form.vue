<template>
  <main class="main" role="main">
    <div class="main-inner">
      <div class="main-con">
        <div class="form">
          <ul class="form-ul">
            <li class="form-li">
              <div class="form-ttl essen">
                <!--필수값: essen-->
                <span>라벨</span>
              </div>
              <div class="form-in">
                <label class="label">
                  <input type="text" placeholder="Appg" />
                </label>
                <button>전송</button>
              </div>
              <div class="valid">유효성 체크 문구</div>
            </li>
            <li class="form-li">
              <div class="form-ttl">
                <span>휴대폰번호</span>
              </div>
              <div class="form-in timer">
                <label class="label">
                  <input type="phone" placeholder="01012345678" v-model="phone"/>
                </label>
                <button @click="fnSend">{{ isRunning ? '재발송' : '인증번호 전송'}}</button>
              </div>
            </li>
            <li class="form-li">
              <div class="form-ttl">
                <span>인증번호</span>
              </div>
              <div class="form-in timer">
                <label class="label">
                  <input type="text" placeholder="인증번호" />
                  <span class="time">{{ time }}</span>
                </label>
                <button>확인</button>
              </div>
            </li>
            <li class="form-li">
              <div class="form-in">
                <label class="label">
                  <select>
                    <option disabled selected hidden>선택</option
                    ><!--플레이스 홀더 같은 존재, 선택목록에서 제외됨-->>
                    <option>text1</option>
                    <option>text2</option>
                  </select>
                </label>
                <button>전송</button>
              </div>
              <div class="hint">힌트문구</div>
            </li>
            <li class="form-li">
              <div class="form-in">
                <label class="label">
                  <textarea>Hello</textarea>
                </label>
              </div>
              <button>전송</button>
            </li>
            <li class="form-li">
              <div class="chk-box">
                <label class="checkbox type-02">
                  <input type="checkbox" checked />
                  <span class="label">체크</span>
                </label>
                <label class="checkbox type-02">
                  <input type="checkbox" />
                  <span class="label">체크</span>
                </label>
              </div>
              <div class="radio-box">
                <label class="radio">
                  <input type="radio" name="radio" checked="" />
                  <span class="label">라디오</span>
                </label>
                <label class="radio">
                  <input type="radio" name="radio" />
                  <span class="label">라디오</span>
                </label>
              </div>
            </li>
          </ul>
        </div>

        <ol class="ol dot">
          <li class="ol-li">
            <span class="ol-txt"
              >내용 길어져서 두 줄로 떨어질때 점 아래로 내려가지 않고
              들여쓰기되어 보여짐</span
            >
          </li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
        </ol>
        <ol class="ol dot-big">
          <li class="ol-li">
            <span class="ol-txt"
              >내용 길어져서 두 줄로 떨어질때 점 아래로 내려가지 않고
              들여쓰기되어 보여짐</span
            >
          </li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
        </ol>
        <ol class="ol nb-dot">
          <li class="ol-li">
            <span class="ol-txt"
              >내용 길어져서 두 줄로 떨어질때 점 아래로 내려가지 않고
              들여쓰기되어 보여짐</span
            >
          </li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
        </ol>
        <ol class="ol nb-bracket">
          <li class="ol-li">
            <span class="ol-txt"
              >내용 길어져서 두 줄로 떨어질때 점 아래로 내려가지 않고
              들여쓰기되어 보여짐</span
            >
          </li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
        </ol>
        <ol class="ol nb-circle">
          <li class="ol-li">
            <span class="ol-txt"
              >내용 길어져서 두 줄로 떨어질때 점 아래로 내려가지 않고
              들여쓰기되어 보여짐</span
            >
          </li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
        </ol>
        <ol class="ol dot-hangul">
          <li class="ol-li">
            <span class="ol-txt"
              >내용 길어져서 두 줄로 떨어질때 점 아래로 내려가지 않고
              들여쓰기되어 보여짐</span
            >
          </li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
          <li class="ol-li"><span class="ol-txt">내용</span></li>
        </ol>
        <div class="thumb">
          <div class="inner">
            <img src="http://placehold.it/980x600" alt="이미지 설명" />
          </div>
        </div>

        <div class="btn-wrap">
          <button class="btn">버튼</button>
        </div>
        <div class="btn-wrap">
          <button class="btn">버튼</button>
          <button class="btn bo">버튼</button>
        </div>
        <div class="btn-wrap">
          <button class="btn disabled">버튼</button>
        </div>
      </div>
      <div class="btn-wrap btm">
        <button class="btn">버튼</button>
      </div>
    </div>
  </main>
</template>

<script>
import { getCurrentInstance,reactive, toRefs, onUnmounted }  from 'vue'

export default {
  name: 'main-form',
  description: '메인 폼',
  setup() {
    const { proxy } = getCurrentInstance()

    const state = reactive({
      phone: '',
      time: '03:00',
      timer: 0,
      count: 180,
      isRunning: false
    })

    const fnSend = () => {
      if(proxy.$Util.isEmpty(state.phone)) return
       if(state.isRunning) {
        stopTimer()
      }
      startTimer()
    }

    const startTimer = () => {
      stopTimer()
      state.isRunning = true
      state.timer = setInterval(() => {
        state.count--
        if(state.count <= 0) {
          stopTimer()
          alert('인증번호가 만료되었습니다. \n다시 인증해주세요.')
          state.isRunning = false
        }
        state.time = timerFormat()
      }, 1000)
    }

    const stopTimer = () => {
      clearInterval(state.timer)
      state.count = 180
      state.time = '03:00'
      state.isRunning = false
    }

    const timerFormat = () => {
      const time = state.count / 60
      const min = parseInt(time)
      const sec = Math.round((time - min) * 60)
      return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
    }

    onUnmounted(() => {
      // 페이지를 벗어났을때 타이머 멈춰주기
      stopTimer()
    })
    return {
      ...toRefs(state),
      fnSend
    }
  }
}
</script>

<style scoped></style>
