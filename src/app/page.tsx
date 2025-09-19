import { About } from './_components/about';
import { Hero } from './_components/navbar';
import { Projects } from './_components/projects';

export default function Home() {
  return (
    <main>
   <Hero />
      <About />
      <Projects />
    </main>
  );
}
