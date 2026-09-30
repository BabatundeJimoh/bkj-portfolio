/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink:'#0a0a0c', accent:'#9F6BFF', accent2:'#7B61FF' },
    fontFamily: { sans:['Bricolage Grotesque','system-ui','sans-serif'], mono:['JetBrains Mono','monospace'] },
  } },
  plugins: [],
}
