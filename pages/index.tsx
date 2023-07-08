import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import {RESUME_DATA} from "@/components/static/resume-data";
import About from "@/components/About";

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
      [
    <Header data={RESUME_DATA.main}/>,
    <About data={RESUME_DATA.main} />
]
)
}
