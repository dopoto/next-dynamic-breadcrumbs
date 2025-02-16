import { ManagerTopNav } from "./_components/ManagerTopNav";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ManagerTopNav />
      {children}
    </>
  );
}
