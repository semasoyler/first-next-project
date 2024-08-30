import Image from "next/image";
import Banner from "../../components/banner";
import Projects from "../../components/projects";
import Cards from "../../components/cards";
import Contact from "../../components/contact";


export default function Home() {
  return (
    <main >
      <Banner/>
      <Projects/>
      <Cards/>
      <Contact/>
      

    </main>
  );
}
