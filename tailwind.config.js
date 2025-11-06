export default {
  darkMode: 'class', // 다크모드는 class 토글 방식
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      /* 폰트 패밀리 (아기자기/둥근 톤) */
      fontFamily: {
        ui: [
          '"Nunito"',      // 원한다면 public/index.html에 Google Fonts 링크 추가 권장
          'ui-rounded',
          'system-ui',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'sans-serif',
        ],
      },

      /* 커스텀 컬러 팔레트 */
      colors: {
        ink: {
          50:  '#f7f7fb',
          100: '#eef0f6',
          200: '#d9dce7',
          300: '#b9bfd2',
          400: '#8f97b3',
          500: '#6c7699',
          600: '#565e7b',
          700: '#454b62',
          800: '#323646',
          900: '#1f2330',
        },
        mint: {
          50:  '#f2fbf9',
          100: '#d8f5ef',
          200: '#b6eae0',
          300: '#83dccd',
          400: '#4fceb9',
          500: '#30bfa9',
          600: '#22a190',
          700: '#1a8073',
          800: '#16685e',
          900: '#124f48',
        },
        candy: {
          50:  '#fff1f5',
          100: '#ffe4ec',
          200: '#ffc9da',
          300: '#ffa3c2',
          400: '#ff7aa7',
          500: '#ff5c93',
          600: '#ff3d7f',
          700: '#e21f65',
          800: '#b5164e',
          900: '#8f1240',
        },
      },

      /* 커스텀 그림자 (shadow-soft / shadow-pop) */
      boxShadow: {
        soft: '0 4px 18px rgba(0,0,0,0.06)',
        pop:  '0 10px 24px rgba(0,0,0,0.12)',
      },

      /* 귀여운 움직임용 이징 커브 (ease-snap) */
      transitionTimingFunction: {
        snap: 'cubic-bezier(.2,.8,.2,1)',
      },

      /* 필요하면 라운드도 확장 가능 (지금은 기본 rounded-2xl만 사용) */
      // borderRadius: {
      //   xl2: '1.25rem',
      // },
    },
  },
  plugins: [],
}
