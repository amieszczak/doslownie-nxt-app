import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
// import Footer from "./components/footer/footer";
import { Poppins } from "next/font/google";
import getTags from "@/integrations/wordpress/getTags";
import { PostTagsType } from "./types/post-tags";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  style: ['normal', 'italic']
})

export const metadata: Metadata = {
  title: "Dosłownie neurologopedia",
  description: "Centrum terapii neurologopedycznej Dosłownie",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const tags: PostTagsType[] | null = await getTags();

  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Header tags={tags}/>
          <div className="max-w-[1920px] mx-auto">
            {children}   
          </div>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
