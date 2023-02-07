import { useRouter } from "next/router";

function PortfolioItemPage() {
  const router = useRouter();

  const { projectId } = router.query;

  return <h1>Portfolio item {projectId}</h1>;
}

export default PortfolioItemPage;
