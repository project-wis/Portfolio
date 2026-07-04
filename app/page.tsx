import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeBuild from "@/components/WhatWeBuild";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeBuild />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
