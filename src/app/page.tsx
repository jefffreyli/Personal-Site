import Bio from "../components/about/Bio";
import Footer from "../components/Footer";
import Projects from "../components/projects/Projects";
import SpotifySection from "../components/spotify/SpotifySection";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-700 px-10 py-5 lg:p-0">
      <Bio />
      <div className="h-10" />
      {/* Spinning Tree Animation */}
      <div className="flex justify-center items-center my-8">
        <svg
          className="spinning-tree"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tree foliage */}
          <circle cx="50" cy="35" r="20" fill="#4ade80" />
          <circle cx="35" cy="40" r="18" fill="#4ade80" />
          <circle cx="65" cy="40" r="18" fill="#4ade80" />
          <circle cx="50" cy="50" r="22" fill="#22c55e" />
          
          {/* Tree trunk */}
          <rect x="44" y="55" width="12" height="25" fill="#92400e" rx="2" />
          
          {/* Ground */}
          <ellipse cx="50" cy="82" rx="30" ry="4" fill="#86efac" opacity="0.5" />
        </svg>
      </div>
      <Tools />
      <div className="h-5" />
      <Projects />
      <div className="h-5" />
      <SpotifySection />
      <Footer />
    </div>
  );
}
