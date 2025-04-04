import s from './MainPage.module.scss'
import clsx from "clsx";
import {Bio} from "@/components/Bio/Bio";
import {Contacts} from "@/components/Contacts/Contacts";
import {Skills} from "@/components/Skills/Skills";
import {About} from "@/components/About/About";
import {Portfolio} from "@/components/Portfolio/Portfolio";


function MainPage() {
    return (
        <div className={clsx(
            s.mainPage
        )}>
                <Bio/>
                {/*<Skills />*/}
                <About />
                <Portfolio/>
                <Contacts />
        </div>
    )
}

export default MainPage
