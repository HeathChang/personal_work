<template>
  <main class="main" role="main">
    <div class="main-inner bg">
      <div class="main-con">
        <div class="accodian-menu">
          <ul class="accodian-menu-ul">
            <li class="accodian-menu-li" onclick="classList.toggle('on')">
              <div class="toggle-ttl">
                <h3>제목</h3>
              </div>
              <div class="toggle-inner">
                <p>답변이 등록됩니다.</p>
                <p>답변이 등록됩니다.</p>
                <p>답변이 등록됩니다.</p>
              </div>
            </li>
            <li class="accodian-menu-li" onclick="classList.toggle('on')">
              <div class="toggle-ttl">
                <h3>제목</h3>
              </div>
              <div class="toggle-inner">
                <p>답변이 등록됩니다.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'main-view',
  description: '메인 상세',
  setup() {
    const router = useRouter()
    const fnView = () => {
      router.push({ path: '/main/view' })
    }

    return { fnView }
  }
}
</script>

<style scoped></style>
