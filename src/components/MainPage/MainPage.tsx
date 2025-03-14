import s from './MainPage.module.scss'
import {Geist, Geist_Mono} from "next/font/google";
import clsx from "clsx";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Bio} from "@/components/Features/Bio/Bio";
import {Contacts} from "@/components/Features/Contacts/Contacts";

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
            <div className={'container'}>
                <Bio/>
                <Contacts />
            </div>
        </div>
    )
}

export default MainPage
