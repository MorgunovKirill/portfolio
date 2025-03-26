import s from './MainPage.module.scss'
import {Geist, Geist_Mono} from "next/font/google";
import clsx from "clsx";
import {Bio} from "@/components/Features/Bio/Bio";
import {Contacts} from "@/components/Features/Contacts/Contacts";
import {Portfolio} from "@/components/Features/Portfolio/Portfolio";

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
                <Bio/>
                <Portfolio />
                <Contacts />
        </div>
    )
}

export default MainPage
