import type { Config } from 'tailwindcss'
const config: Config = {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'],theme:{extend:{fontFamily:{sans:['var(--font-vazirmatn)','sans-serif']},colors:{ink:'#0b1020',brand:'#7c5cff',cyan:'#22d3ee'}}},plugins:[]}
export default config
