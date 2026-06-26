// This root layout is a required Next.js shell.
// All meaningful providers, fonts, and components live in app/[locale]/layout.tsx.
// The middleware redirects '/' to '/en' or '/mr' before this renders.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
