import Link from "next/link";
import React from "react";

export default async function WidgetsPage() {
  return (
    <div>
      <h1>This is the Widgets page</h1>
      <li><Link href="/manager/widgets/add">Go to the Add Widget page</Link></li>
      <li><Link href="/manager/widgets/subwidgets/">Go to the Subwidgets page</Link></li>
      <li><Link href="/manager/widgets/subwidgets/add">Go to the Add Subwidget page</Link></li>
    </div>
  );
}
