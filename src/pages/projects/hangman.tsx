import React from 'react';
import {getHeaderLayout} from "@/components/Layouts/HeaderLayout/HeaderLayout";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import {items} from "@/data/data";

function Hangman() {
    return <ProjectPage {...items[1]} />
}

Hangman.getLayout = getHeaderLayout
export default Hangman
