import Link from "next/link";
import React from "react";

export default async function LocationsPage() {
  return (
    <div>
      <h1>This is the Locations page</h1>
      <Link href="/manager/locations/add">Go to Add Location page</Link>
    </div>
  );
}
