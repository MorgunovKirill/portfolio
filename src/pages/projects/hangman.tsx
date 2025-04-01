import React from 'react';
import {getHeaderLayout} from "@/components/Layouts/HeaderLayout/HeaderLayout";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import {items} from "@/data/data";

function Hangman() {
    const item = items.find((item) => {
        return item.title === 'Hangman game'
    })
    return item && <ProjectPage {...item} />
}

Hangman.getLayout = getHeaderLayout
export default Hangman
