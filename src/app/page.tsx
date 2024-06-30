import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Song from "./components/Song";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-700 px-10 py-5 lg:p-0">
      <Bio />
      <div className="h-10" />
      <Tools />
      <div className="h-5" />
      <Projects />
      {/* <div className="h-5" /> */}
      {/* <Song /> */}
      <Footer />
      
    </div>
  );
}
