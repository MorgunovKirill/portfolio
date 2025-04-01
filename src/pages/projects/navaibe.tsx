import React from 'react';
import {getHeaderLayout} from "@/components/Layouts/HeaderLayout/HeaderLayout";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import {items} from "@/data/data";

function Navaibe() {
    const item = items.find((item) => {
        return item.title === 'Navaibe'
    })
    return item && <ProjectPage {...item} />
}

Navaibe.getLayout = getHeaderLayout
export default Navaibe
