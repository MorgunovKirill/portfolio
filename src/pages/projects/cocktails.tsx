import React from 'react';
import {getHeaderLayout} from "@/components/Layouts/HeaderLayout/HeaderLayout";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import {items} from "@/data/data";

function Cocktails() {
    const item = items.find((item) => {
        return item.title === 'Cocktails'
    })
    return item && <ProjectPage {...item} />
}

Cocktails.getLayout = getHeaderLayout
export default Cocktails
