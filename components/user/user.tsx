import Link from "next/link";
import React from "react";
import ReactPlaceholder from "react-placeholder/lib";
import { UserSwr } from "../../lib/user/user.swr";
import ErrorContainer from "../error-container";
import Button from "../ui/buttons/button";

interface Props {
  id: string;
}

export const User = (props: Props) => {
  const { data, error, isLoading } = UserSwr.useUser(props.id);

  if (error) return <ErrorContainer>{error}</ErrorContainer>;

  if (data)
    return (
      <div className="flex flex-col my-10 border-1 border-blue-700 mx-auto w-1/5 text-center shadow-md p-2">
        <ReactPlaceholder
          rows={7}
          type="media"
          showLoadingAnimation={true}
          ready={!isLoading}
        >
          <p>
            <b>ID: </b>
            {data.id}
          </p>
          <p>
            <b>Username: </b>
            {data.username}
          </p>
          <p>
            <b>E-Mail: </b>
            {data.email}
          </p>

          <Link href="/users">
            <Button size="sm">Back</Button>
          </Link>
        </ReactPlaceholder>
      </div>
    );
  return <ErrorContainer>404 Not Found</ErrorContainer>;
};
