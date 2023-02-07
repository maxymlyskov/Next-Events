import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio/21">Profolio 21</Link>
        </li>
      </ul>
    </>
  );
}
