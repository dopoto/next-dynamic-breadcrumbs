import Link from "next/link";
import React from "react";

export default async function SubwidgetsPage() {
  return (
    <div  >
      <h1>This is the Subwidgets page</h1>
      <Link href="/manager/widgets/subwidgets/add">Go to the Add Subwidget page</Link>
    </div>
  );
}
