import React from 'react';
import {getHeaderLayout} from "@/components/Layouts/HeaderLayout/HeaderLayout";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import {items} from "@/data/data";

function Cocktails() {
    return <ProjectPage {...items[2]} />
}

Cocktails.getLayout = getHeaderLayout
export default Cocktails
