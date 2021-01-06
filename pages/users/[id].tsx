import { GetStaticProps } from "next";
import React from "react";
import useSWR from "swr";
import ErrorContainer from "../../components/error-container";
import { IUserDto } from "../../lib/dto/user.dto";
import { swrResponse } from "../../lib/fetcher.util";
import { UserSwr } from "../../lib/user/user.swr";
import { useRouter } from "next/router";
import Link from "next/link";
import { User } from "../../components/user/user";
import Head from "next/head";
const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if(!id) return null;
  
  return (
    <>
      <Head>
        <title>User: {id}</title>
      </Head>
      <User id={id?.toString()} />
    </>
  );
};

export default UserPage;
