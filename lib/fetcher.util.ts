import { responseInterface } from "swr";

export const fetcher = (url) => fetch(url).then((x) => x.json());
export const swrResponse = <Data, Error>(
  response: responseInterface<Data, Error>
) => {
  return {
    data: response.data,
    error: response.error,
    isLoading: !response.error && !response.data,
  };
};
