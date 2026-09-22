import './globals.css'
import type { Metadata } from 'next'
export const metadata:Metadata={title:'رهپو | یادگیری تعاملی برای کنکور',description:'پلتفرم آموزشی تعاملی دانش‌آموزان ایرانی'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl"><body>{children}</body></html>}
