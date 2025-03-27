import React from 'react';
import {getHeaderLayout} from "@/components/Layouts/HeaderLayout/HeaderLayout";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import {items} from "@/data/data";

function Interviews() {
    return <ProjectPage {...items[0]} />
}

Interviews.getLayout = getHeaderLayout
export default Interviews
