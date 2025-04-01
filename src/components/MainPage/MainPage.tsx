import s from './MainPage.module.scss'
import clsx from "clsx";
import {Bio} from "@/components/Features/Bio/Bio";
import {Contacts} from "@/components/Features/Contacts/Contacts";
import {Skills} from "@/components/Features/Skills/Skills";
import {About} from "@/components/Features/About/About";
import {Portfolio} from "@/components/Features/Portfolio/Portfolio";
import {useState, useEffect} from "react";
import {PortfolioType} from "@/utils/types";

const MainPage = () => {
    const [items, setItems] = useState<PortfolioType[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/api/getData');
                const data = await res.json();
                setItems(data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        void fetchData();
    }, []);

    return (
        <div className={clsx(
            s.mainPage
        )}>
                <Bio/>
                <Skills />
                <About />
                <Portfolio items={items} />
                <Contacts />
        </div>
    )
}

export default MainPage
