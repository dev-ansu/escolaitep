import Container from "@/components/container";
import { Hero } from "@/components/hero";
import About from "@/components/home/about";
import Footer from "@/components/home/footer";
import Submenu from "@/components/home/submenu/index.";
import { getDataHome, getPages } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { Phone } from "lucide-react";


export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  

  return (
  
      <main>
        
        <Submenu />
        <Hero 
          heading={object.metadata.heading}
          buttonTitle={object.metadata.cta_button.title}
          buttonUrl={object.metadata.cta_button.url}
          bannerURL={object.metadata.banner.url}
          icon={<Phone size={24} color="#fff" />}
        />

        <Container>
          <About object={object}  />
          <Footer object={object} />
        </Container>
        
      </main>

  );

}