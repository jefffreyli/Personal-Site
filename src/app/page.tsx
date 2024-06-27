import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Bio />
      <div className="h-16" />
      <Projects />
      <div className="h-16" />
      <Footer/>
    </div>
  );
}
