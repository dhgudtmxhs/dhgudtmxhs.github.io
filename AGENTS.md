# Repository Notes

이 문서는 `C:\workspace\my\dhgudtmxhs.github.io` 저장소의 현재 상태를 빠르게 파악하기 위한 작업 메모다.
앞으로 이 프로젝트를 수정할 때 에이전트와 사용자가 함께 참고하는 기준 문서로 사용한다.

## 1. 프로젝트 정체

- 현재 프로젝트는 `Vite + React + Tailwind CSS` 기반의 정적 사이트다.
- 저장소 이름이 `dhgudtmxhs.github.io`라서 GitHub Pages용 user site 저장소 성격이 강하다.
- 구현 상태는 완성된 블로그나 포트폴리오가 아니라, UI playground 또는 blog-like prototype에 가깝다.
- 실제 `src/App.jsx`는 글 목록이나 포스트 렌더링보다 디자인 토큰과 UI 컴포넌트 샘플을 확인하는 데 초점이 있다.

## 2. 이 프로젝트에서 확인한 사실

### 구조

- 엔트리: `src/main.jsx`
- 메인 화면: `src/App.jsx`
- 전역 스타일: `src/index.css`
- Tailwind 설정: `tailwind.config.js`
- Vite 설정: `vite.config.js`
- 정적 에셋: `public/rocks.png`, `public/vite.svg`, `src/assets/react.svg`

### 기술 스택

- `react`, `react-dom`
- `react-router-dom`
- `tailwindcss`, `postcss`, `autoprefixer`
- `gray-matter`, `react-markdown`, `remark-gfm`, `rehype-highlight`
- `react-helmet-async`
- `gh-pages`

### 구현 상태

- `App.jsx`는 현재 실제 블로그나 포트폴리오 데이터 구조 없이 샘플 UI를 렌더링한다.
- 화면에는 sidebar, topbar, cards, buttons, badges, form fields, empty state, toast 같은 데모 요소가 있다.
- dark mode 토글이 구현되어 있다.
- `BrowserRouter`는 연결되어 있지만 라우트 분리는 아직 없다.
- markdown 관련 패키지가 설치 목록에는 있으나, 현재 코드에서 실제 게시글 렌더링 흐름은 보이지 않는다.
- `gray-matter`, `react-markdown` 등을 보면 파일 기반 블로그를 하려다가 중단했을 가능성이 높다.

## 3. 배포 방식

현재 저장소는 `main push => 자동 GitHub Pages 배포` 구조로 확인되지 않았다.

확인 근거:

- `package.json`의 `predeploy`: `npm run build`
- `package.json`의 `deploy`: `gh-pages -d dist`
- `.github/workflows` 디렉터리는 현재 없다

의미:

- 개발은 `main` 브랜치에서 진행할 수 있다.
- 하지만 배포는 보통 `npm run deploy`를 실행해야 `dist`가 `gh-pages` 브랜치로 올라간다.
- 즉, `main`에 push만 한다고 자동으로 배포되는 구조는 현재 repo 기준으로는 아니다.

## 4. 도메인 관련 해석

- 사용자는 이미 custom domain 연결을 한 적이 있다고 했다.
- 이 repo 안에는 현재 `CNAME` 파일이 없다.
- 따라서 custom domain 설정은 GitHub Pages 설정 화면에서만 관리했거나, 예전에 `gh-pages` 브랜치 쪽에만 파일이 있었을 수 있다.

주의:

- 배포 방식을 유지하면서 custom domain을 계속 쓰려면 `gh-pages` 배포 시 `CNAME` 처리 상태를 다시 확인해야 한다.
- Pages 설정에서 custom domain이 살아 있어도, 배포 결과물에 따라 동작이 달라질 수 있다.

## 5. 코드에서 바로 보이는 특징과 이슈

### 이미 의도한 방향

- 색상 시스템 `ink`, `mint`, `candy`를 Tailwind 커스텀 컬러로 정의해두었다.
- `shadow-soft`, `shadow-pop`, `ease-snap` 같은 스타일 토큰이 있다.
- 레이아웃, 버튼, 카드, 폼, empty state까지 한 번에 만든 것을 보면 디자인 시스템 초안을 먼저 잡으려 했던 것으로 보인다.

### 현재 문제점

- `src/App.jsx`, `src/index.css`, `tailwind.config.js`, `vite.config.js`의 한글 주석과 일부 문자열이 깨져 있다.
- 이건 인코딩 문제로 보이며, 이후 정리할 때 먼저 복구하거나 제거하는 편이 안전하다.
- `src/main.jsx`에서 `StrictMode`를 import했지만 실제로 사용하지 않는다.
- `BrowserRouter basename=''`는 custom domain 기준에서는 큰 문제는 아니지만, 라우팅 구조를 다시 잡을 때 의도를 분명히 해야 한다.
- `vite.config.js`의 `base: ''`는 custom domain을 쓸 때는 상대 경로 배포 관점에서 크게 이상하지 않지만, 경로 전략은 다시 확인이 필요하다.

## 6. 예전에 하려던 것에 대한 가장 합리적인 해석

확정 사실과 추정은 구분한다.

확정 사실:

- markdown 관련 패키지가 이미 설치되어 있다.
- UI 샘플 화면이 존재한다.
- GitHub Pages용 배포 스크립트가 있다.

추정:

- 원래는 GitHub Pages에 올리는 개인 블로그 또는 글, 노트 중심 사이트를 만들려 했다.
- 동시에 글 화면에 쓸 공통 UI 스타일 시스템을 먼저 만든 뒤 멈춘 상태로 보인다.
- 아직 데이터 모델, 포스트 소스 디렉터리, 라우팅, 목록 페이지, 상세 페이지는 본격적으로 들어가지 않았다.

## 7. 포트폴리오로 바꾸기 전에 알아야 할 것

### 유지할 수 있는 것

- Vite + React 기반 구조
- Tailwind 설정과 컬러, 그림자, 버튼 등 디자인 토큰
- GitHub Pages 배포 방식
- custom domain 사용 가능성

### 크게 바꿔도 되는 것

- 현재 `App.jsx`의 샘플 카드, 폼, 카운터 UI
- 블로그를 염두에 둔 markdown 관련 패키지 사용 계획
- 현재 네비게이션 텍스트 `Dashboard`, `Blog`, `About`, `Contact`의 정보 구조

### 포트폴리오 전환 시 먼저 결정할 것

- 단일 페이지 포트폴리오인지
- `Home / Projects / About / Contact` 구조인지
- 블로그 섹션을 아예 뺄지, `Notes`처럼 약하게 남길지
- custom domain을 계속 쓸지
- 배포를 계속 `gh-pages`로 할지, GitHub Actions 기반 Pages로 바꿀지

## 8. 다음 작업 우선순위 제안

빠르게 포트폴리오로 전환하려면 아래 순서가 가장 안전하다.

1. 깨진 한글과 주석 제거 또는 인코딩 정리
2. `App.jsx`를 포트폴리오 정보 구조로 교체
3. 필요 없는 블로그 관련 의존성 유지 여부 결정
4. custom domain과 Pages 배포 방식 확인
5. 실제 배포 테스트

## 9. 검증 상태

이번 문서는 실제 파일을 읽고 작성했다.

확인 완료:

- `package.json`
- `src/App.jsx`
- `src/main.jsx`
- `src/index.css`
- `tailwind.config.js`
- `vite.config.js`
- `index.html`

확인 불가 또는 미실행:

- `node_modules`가 현재 없어서 `npm run build` 검증은 아직 하지 못했다.
- Git 상태는 sandbox 계정의 `dubious ownership` 문제 때문에 바로 읽지 못했다.
- GitHub Pages 웹 설정 화면 자체는 이 로컬 repo만으로는 확인할 수 없다.

## 10. 앞으로 에이전트가 따라야 할 작업 메모

- 이 저장소는 현재 완성 서비스보다 초안으로 취급한다.
- 사용자가 포트폴리오 전환을 원하면, 기존 샘플 UI를 보존하려고 애쓰기보다 필요한 부분만 재사용한다.
- CSS UI는 최대한 AI가 만든 티가 나지 않게, 반복적이고 뻔한 구성보다 의도가 보이는 화면으로 잡는다.
- CSS UI는 너무 무겁거나 유행 지난 느낌보다, 지금 봐도 자연스러운 요즘 톤으로 정리한다.
- 컬러는 한 화면에서 너무 많이 벌리지 말고, 적은 수의 핵심 색으로 분위기를 정리한다.
- UI 작업 시에는 desktop만 보지 말고, 반응형을 반드시 같이 고려한다.
- 배포 관련 답변을 할 때는 `main push만으로 자동 배포되지 않는다`는 현재 repo 기준 사실을 우선 설명한다.
- custom domain 관련 작업 전에는 `gh-pages` 브랜치 산출물과 Pages 설정을 함께 확인해야 한다.
- 한글이 깨진 문자열은 기능 추가 전에 먼저 정리 대상임을 항상 염두에 둔다.
