import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Song from "./components/Song";
import Tools from "./components/Tools";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { nameToLogo } from "./constants";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-700">
      <Bio />
      <div className="h-10" />
      <Tools />
      <div className="h-5" />
      <Projects />
      <div className="h-16" />
      <Song />
      <Footer />
    </div>
  );
}
