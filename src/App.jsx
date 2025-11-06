import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

export default function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  // 다크모드 토글
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <div className="app-shell">
      {/* 사이드바 (데스크탑 이상에서 보임) */}
      <aside className="sidebar hidden lg:block">
        <div className="menu">
          <div className="menu-label">Navigation</div>
          <a className="menu-item active">Dashboard</a>
          <a className="menu-item">Blog</a>
          <a className="menu-item">About</a>
          <a className="menu-item">Contact</a>

          <div className="menu-label">Actions</div>
          <button className="menu-item" onClick={() => setDark((v) => !v)}>
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </aside>

      {/* 모바일 탑바 (사이드바 대신) */}
      <header className="topbar lg:hidden">
        <div className="flex items-center gap-3">
          <img src={viteLogo} alt="Vite" className="w-6 h-6" />
          <span className="font-semibold">ohstone playground</span>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={() => setDark((v) => !v)}>
          {dark ? "☀️" : "🌙"}
          <span className="sr-only">Toggle theme</span>
        </button>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="content container-default">
        {/* 히어로 섹션 */}
        <section className="section mb-6">
          <div className="section-header">
            <h1>픽토그램 느낌 공통 스타일 확인 👇</h1>
            <div className="flex items-center gap-2">
              <button className="btn btn-outline btn-sm" onClick={() => setCount(0)}>
                Reset
              </button>
              <button className="btn btn-secondary btn-sm" onClick={() => setDark((v) => !v)}>
                {dark ? "Light" : "Dark"}
              </button>
            </div>
          </div>

          <p className="card-desc">
            색상(ink/mint/candy), 버튼, 카드, 인풋, 배지, 칩, 그림자, 라운드, 이징이 정상인지 확인하세요.
          </p>

          <div className="divider" />

          <div className="grid gap-4 md:grid-cols-2">
            {/* 카드 1: 버튼/배지 */}
            <div className="card">
              <div className="card-title">Buttons & Badges</div>
              <div className="flex flex-wrap items-center gap-2">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-outline">Outline</button>
                <button className="icon-btn" aria-label="settings">⚙️</button>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="badge badge-pink">Pictogram</span>
                <span className="badge badge-mint">Mint</span>
                <span className="badge badge-ink">Ink</span>
              </div>
            </div>

            {/* 카드 2: 카운터/이징 */}
            <div className="card">
              <div className="card-title">Counter + ease-snap</div>
              <p className="card-desc mb-3">버튼 누를 때 scale/ease 효과 체크</p>
              <div className="flex items-center gap-3">
                <button className="btn btn-primary" onClick={() => setCount((c) => c + 1)}>
                  +1
                </button>
                <button className="btn btn-outline" onClick={() => setCount((c) => Math.max(0, c - 1))}>
                  -1
                </button>
                <span className="chip">
                  <span className="chip-dot" /> count: <b>{count}</b>
                </span>
              </div>
            </div>

            {/* 카드 3: 폼 */}
            <div className="card">
              <div className="card-title">Form Fields</div>
              <div className="grid gap-3">
                <label className="field">
                  <span className="label">이름</span>
                  <input className="input" placeholder="홍길동" />
                </label>
                <label className="field">
                  <span className="label">유형</span>
                  <select className="select">
                    <option>선택하세요</option>
                    <option>타입 A</option>
                    <option>타입 B</option>
                  </select>
                </label>
                <label className="field">
                  <span className="label">설명</span>
                  <textarea className="textarea" placeholder="간단한 소개를 적어주세요" />
                </label>
              </div>
            </div>

            {/* 카드 4: 이미지/그림자 */}
            <div className="card">
              <div className="card-title">Image (rounded + shadow-soft)</div>
              <p className="card-desc mb-3">
                아래 이미지는 <code>rounded-xl</code> + <code>shadow-soft</code> 적용
              </p>
              <div className="flex items-center gap-4">
                <img src={reactLogo} alt="React" className="w-20 h-20" />
                <img src={viteLogo} alt="Vite" className="w-20 h-20" />
              </div>
            </div>
          </div>
        </section>

        {/* 빈 상태 / 토스트 예시 */}
        <section className="section">
          <div className="empty">
            <div className="empty-icon">🪧</div>
            <div className="empty-title">아직 컨텐츠가 없어요</div>
            <div className="empty-desc">컴포넌트로 쪼개면서 이 영역에 실제 내용을 채우면 됩니다.</div>
            <div className="flex gap-2">
              <button className="btn btn-primary">새로 만들기</button>
              <button className="btn btn-ghost">나중에</button>
            </div>
          </div>
        </section>

        {/* 토스트 샘플 (우하단) */}
        <div className="toast">저장되었습니다 ✅</div>
      </main>
    </div>
  );
}
