import useSwr from "swr";
import {fetcher} from "@/utils/fetcher";

export const useFetch = <T>(url: string) => {
    const {data, error, isLoading} = useSwr<T>(url, fetcher);

    return {
        data,
        error,
        isLoading
    }
}
