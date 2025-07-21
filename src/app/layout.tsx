import { Layout } from "reablocks-docs-theme";
import { Footer } from "@/components/ui/footer";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Nav } from "@/components/ui/nav";
import "reablocks-docs-theme/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reaviz - Open Source ReactJS Chart Component Library",
  description:
    "Modular chart component library that leverages React natively for rendering the components while using D3js under the hood for calculations."
};

/**
 * Root layout component
 * @param children - Children components
 * @returns Root layout component
 */
export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="h-full">
    <Head />
    <body
      className="flex flex-col dark:bg-gradient-to-b dark:from-[#11111F] dark:from-50% dark:via-[#11111F] dark:to-[#121212] antialiased dark:text-white"
    >
    <Layout
      navbar={<Nav />}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/reaviz/reaviz-website"
      editLink="Edit this page on GitHub"
      sidebar={{ defaultMenuCollapseLevel: 2, autoCollapse: false }}
      footer={<Footer />}
    >
      {children}
    </Layout>
    </body>
    </html>
  );
};

