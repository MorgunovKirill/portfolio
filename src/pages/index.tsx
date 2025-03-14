import MainPage from "@/components/MainPage/MainPage";
import {getHeaderLayout} from "@/components/Layouts/HeaderLayout/HeaderLayout";

function Home() {
    return <MainPage/>
}

Home.getLayout = getHeaderLayout
export default Home
