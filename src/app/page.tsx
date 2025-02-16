import Link from "next/link";

export default async function HomePage() {
  return (
    <main>
      <h1>This is the home page</h1>
      <Link href={`/manager`}>Go to Manager page</Link>
    </main>
  );
}
