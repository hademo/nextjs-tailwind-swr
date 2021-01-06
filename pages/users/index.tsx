import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import ReactPlaceholder from "react-placeholder/lib";
import useSWR from "swr";
import Button from "../../components/ui/buttons/button";
import { IUserDto } from "../../lib/dto/user.dto";
import { fetcher } from "../../lib/fetcher.util";

const useUsers = () => {
  const { data, error } = useSWR<IUserDto[]>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Users = () => {
  const { users, isLoading, isError } = useUsers();

  return (
    <div className="flex flex-col h-screen text-center m-auto justify-center space-y-2 max-w-sm">
      <h1 className="text-3xl text-left shadow-sm font-light">Users List:</h1>

      <ReactPlaceholder
        type="text"
        showLoadingAnimation={true}
        rows={20}
        ready={!isLoading}
      >
        {users?.map((x) => (
          <Link href={`/users/${x.id}`}>
            <Button color="red" size="lg">
              <a key={x.id}>Username: {x.username}</a>
            </Button>
          </Link>
        ))}
      </ReactPlaceholder>
    </div>
  );
};

export default Users;
