import s from './MainPage.module.scss'
import clsx from "clsx";
import {Bio} from "@/components/Features/Bio/Bio";
import {Contacts} from "@/components/Features/Contacts/Contacts";
import {Skills} from "@/components/Features/Skills/Skills";
import {About} from "@/components/Features/About/About";
import {Portfolio} from "@/components/Features/Portfolio/Portfolio";

const MainPage = () => {
    return (
        <div className={clsx(
            s.mainPage
        )}>
                <Bio/>
                <Skills />
                <About />
                <Portfolio />
                <Contacts />
        </div>
    )
}

export default MainPage
