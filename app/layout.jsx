import "./globals.css";

export const metadata = {
  title: "K??",
  description: "Minimal Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
