import React from "react";

export default function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export async function getServerSideProps({ params, req, res }) {
  console.log(req);
  console.log(res);

  return {
    props: {
      username: "Max",
    },
  };
}
