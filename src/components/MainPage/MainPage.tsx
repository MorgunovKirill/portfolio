import s from './MainPage.module.scss'
import {Geist, Geist_Mono} from "next/font/google";
import clsx from "clsx";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const MainPage = () => {

  return (
    <div className={clsx(
        s.mainPage,
        geistSans.variable,
        geistMono.variable
    )}>
        Main page
    </div>
  )
}

export default MainPage
