import "./chat.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="chat-layout">{children}</div>;
}
