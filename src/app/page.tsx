import { About } from './_components/about';
import { Hero } from './_components/navbar';
import { Projects } from './_components/projects';
import { Service } from './_components/service';
import { Contacts } from './_components/contacts';
import { Instagram } from './_components/instagram';

export default function Home() {
  return (
    <main>
   <Hero />
      <About />
      <Projects />
      <Service />
      <Instagram />
      <Contacts />
    </main>
  );
}
