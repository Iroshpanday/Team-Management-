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
        bg-linear-to-br from-gray-50 via-emerald-50/20 to-teal-50/30
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
        min-h-screen
      ">
        {/* Background Pattern */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-600/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-300/20 dark:bg-teal-600/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300/20 dark:bg-cyan-600/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
