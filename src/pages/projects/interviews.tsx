import React from 'react';
import {getHeaderLayout} from "@/components/Layouts/HeaderLayout/HeaderLayout";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import {items} from "@/data/data";

function Interviews() {
    const item = items.find((item) => {
        return item.title === 'Interviews'
    })
    return item && <ProjectPage {...item} />
}

Interviews.getLayout = getHeaderLayout
export default Interviews
