import useSWR from "swr";
import { IUserDto } from "../dto/user.dto";
import { swrResponse } from "../fetcher.util";

export class UserSwr {
  static useUser = (id: string) => {
    const resp = useSWR<IUserDto>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    return swrResponse(resp);
  };
}
