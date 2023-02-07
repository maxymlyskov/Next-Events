import Link from "next/link";

export default function Home() {
  const clients = [
    { id: "first", name: "First" },
    { id: "second", name: "Second" },
  ];
  return (
    <>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
