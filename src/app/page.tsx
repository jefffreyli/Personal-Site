import Bio from "./components/Bio";
import Projects from "./components/Projects";
import { InfiniteMovingCardsDemo } from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Bio />
      {/* <InfiniteMovingCardsDemo /> */}
      <Projects />
    </div>
  );
}
