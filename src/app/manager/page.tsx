import Link from "next/link";

export default async function ManagerPage() {
  return (
    <div>
      <h1>This is the Manager Page</h1>
      <li><Link href="/manager/locations">Go to the Locations page</Link></li>
      <li><Link href="/manager/widgets">Go to the Widgets page</Link></li>
    </div>
  );
}
