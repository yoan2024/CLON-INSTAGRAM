import Navegation from "@/components/Barnav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navegation />
      {children}
    </div>
  );
}
