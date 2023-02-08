import fs from "fs/promises";
import path from "path";

export default function Product(props) {
  const { loadedProduct } = props;

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <h2>{loadedProduct.description}</h2>
    </>
  );
}

async function getData() {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "dummy-backend.json"
  );
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps({ params }) {
  const productId = params.pid;

  const data = await getData();
  const product = data.products.find((product) => product.id === productId);
  if (!data) return { notFound: true };
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
