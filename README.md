# 예시모음

## 테일윈드 CSS

### 레이아웃
<div class="app-shell">
  <aside class="sidebar">
    <nav class="menu">
      <div class="menu-label">Menu</div>
      <a class="menu-item active">Dashboard</a>
      <a class="menu-item">Blog</a>
      <a class="menu-item">About</a>
    </nav>
  </aside>

  <main class="content container-default">
    <section class="section">
      <h2>섹션 타이틀</h2>
      <p class="mt-2">본문...</p>
    </section>
  </main>
</div>

### 버튼
<button class="btn btn-primary">확인</button>
<button class="btn btn-secondary">저장</button>
<button class="btn btn-outline">자세히</button>
<button class="icon-btn" aria-label="settings">⚙️</button>

### 폼
<label class="field">
  <span class="label">이름</span>
  <input class="input" placeholder="홍길동" />
</label>

### 다크모드 토글
// html에 <html className="dark"> 붙이면 전역 다크
document.documentElement.classList.toggle('dark')


## 댓글 서비스 예시
<div id="disqus_thread"></div>
<script>
  var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = window.location.pathname;
  };
  (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://YOUR_SHORTNAME.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
</script>
또는 Giscus / Utterances (GitHub 계정 댓글) 활용


## SEO
npm install react-helmet-async
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>About Me | ohstone</title>
        <meta name="description" content="오스톤의 포트폴리오 소개 페이지" />
      </Helmet>
      <h1>About</h1>
    </>
  );
}

