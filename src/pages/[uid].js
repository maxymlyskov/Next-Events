import React from "react";

export default function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export async function getServerSideProps({ params }) {
  const userId = params.uid;

  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
