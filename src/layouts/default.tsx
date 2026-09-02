import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen overflow-x-hidden ">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex flex-col items-center justify-center gap-1 py-3 text-small">
        <div>
          © {siteConfig.year} {siteConfig.name}
        </div>
        
          href="https://xiaohao-liu.github.io/"
          target="_blank"
          rel="noreferrer"
          className="text-default-400 text-tiny hover:underline"
        >
          Template borrowed from Xiaohao Liu
        </a>
      </footer>
    </div>
  );
}
