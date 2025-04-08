import Navegation from "@/components/Barnav";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navegation />
      {children}
      <Footer />
    </div>
  );
}
