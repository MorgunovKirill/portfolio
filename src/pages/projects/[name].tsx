import React from 'react';
import {getHeaderLayout} from "@/components/Layouts/HeaderLayout/HeaderLayout";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import {items} from "@/data/data";
import {useParams} from "next/navigation";

function Project() {
    const params = useParams()
    console.log(params?.name);

    const item = items.find((item) => {
        return item.title === 'Cocktails'
    })
    return item && <ProjectPage {...item} />
}

Project.getLayout = getHeaderLayout
export default Project
