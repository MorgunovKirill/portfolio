import React from 'react';
import {getHeaderLayout} from "@/components/Layouts/HeaderLayout/HeaderLayout";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import {useParams} from "next/navigation";
import {useFetch} from "@/hooks/useFetch";
import {PortfolioType} from "@/utils/types";

function Project() {
    const params = useParams()

    const {data, error, isLoading} = useFetch<{ item: PortfolioType }>(`/api/getProject/${params?.name}`);

    if (error) return <div>No data.</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return null;

    return <ProjectPage {...data.item} />
}

Project.getLayout = getHeaderLayout
export default Project
