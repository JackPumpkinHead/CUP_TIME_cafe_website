import axios, { AxiosRequestConfig } from "axios";

export const RestApi = {
    cupTime: "https://cup-time-api-s9jb.onrender.com",
};

const fullFetcher = (
    url: string,
    options?: AxiosRequestConfig,
    contentType?: string,
) => {
    const fetcher = axios({
        url,
        ...options,
        headers: {
            "Content-Type": contentType || "application/json",
            ...options?.headers,
        },
    });
    return fetcher;
};

export const fetcher = async <T extends any>(
    url: string,
    options?: AxiosRequestConfig,
): Promise<T> => {
    return fullFetcher(url, options).then((res) => res.data);
};

const fetchFactory =
    (apiUrl: string) =>
    async <T extends any>(
        url: string,
        init?: AxiosRequestConfig,
    ): Promise<T> => {
        return fetcher<T>(`${apiUrl}${url}`, init);
    };

export const cupTimeProductsFetch = fetchFactory(RestApi.cupTime);
