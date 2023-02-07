import { useRouter } from "next/router";

export default function ClientPage() {
  const router = useRouter();

  const loadBlogs = () => {
    router.push("/about");
  };
  return (
    <div>
      <h1>Client Page</h1>
      <button onClick={loadBlogs}>Load first client</button>
    </div>
  );
}
