import { useRouter } from "next/router";
import React from "react";

export default function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return <div>ClientProjectPage</div>;
}
