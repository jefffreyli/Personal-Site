import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { nameToLogo } from "./constants";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Bio />
      <div className="h-10" />
      <Tools/>
      <div className="h-10" />
      <Projects />
      <div className="h-16" />
      <Footer />
    </div>
  );
}
