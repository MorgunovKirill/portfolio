import React from 'react';
import {getHeaderLayout} from "@/components/Layouts/HeaderLayout/HeaderLayout";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import {items} from "@/data/data";

function FlashCards() {
    const item = items.find((item) => {
        return item.title === 'Flash cards'
    })
    return item && <ProjectPage {...item} />
}

FlashCards.getLayout = getHeaderLayout
export default FlashCards
