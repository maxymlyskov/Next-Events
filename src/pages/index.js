import fs from "fs/promises";
import path from "path";

export default function Home(props) {
  const { products } = props;
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  console.log("regenearting");
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "dummy-backend.json"
  );
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
