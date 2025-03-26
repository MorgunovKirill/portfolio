import React from 'react';
import s from './Socials.module.scss'
import {FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TelegramIcon} from "@/assets/components";

const Socials = () => {
    return (
        <div className={s.socials}>
            <a className={s.link}
               href="https://t.me/R0bur" aria-label={'telegram link'}
               target="_blank"
               rel="noopener noreferrer"><TelegramIcon/></a>
            <a className={s.link}
               href="https://github.com/MorgunovKirill"
               aria-label={'github link'}
               target="_blank"><GithubIcon/></a>
            <a className={s.link}
               href="https://www.linkedin.com/in/kirill-morgunov-06426a185/"
               aria-label={'linkedin link'}
               target="_blank"><LinkedinIcon/></a>
            <a className={s.link}
               href="https://www.facebook.com/kirill.morgunov"
               aria-label={'facebook link'}
               target="_blank"><FacebookIcon/></a>
            <a className={s.link}
               href="https://www.instagram.com/_r0bur/"
               aria-label={'instagram link'}
               target="_blank"><InstagramIcon/></a>
        </div>
    );
};

export default Socials;