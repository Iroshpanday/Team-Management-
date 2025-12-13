import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="
        bg-white text-black
        dark:bg-gray-900 dark:text-gray-100
        transition-colors
      ">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
