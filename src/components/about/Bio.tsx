import BioHeader from "@/components/about/BioHeader";
import { LinkPreview } from "@/components/ui/link-preview";

const Bio = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center bg-gray-100 pt-4 lg:pt-24">
          <div className="max-w-4xl text-black">
            <BioHeader />

            <div className="bg-white rounded-lg shadow-xs p-6">
              <div className="">
                I'm a junior at{" "}
                <LinkPreview
                  url="https://mit.edu"
                  className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent font-bold"
                >
                  MIT
                </LinkPreview>{" "}
                studying computer science and engineering. I'm currently a
                Software Development Engineering intern at{" "}
                <LinkPreview
                  url="https://aws.amazon.com"
                  className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent font-bold"
                >
                  Amazon Web Services
                </LinkPreview>
                , working on serverless containers with the Fargate Placement
                team, and a part-time developer at{" "}
                <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent font-bold">
                  Vibrantec
                </span>
                , a startup building a cross-platform health and wellness app.{" "}
                <br />
                <br />
                My focus is on AI automation and cloud computing — specifically
                how we can use AI to eliminate mundane tasks and unlock human
                potential. I've also explored liquid handling robotic automation
                at the MIT Media Lab, building agents using LangChain.
                <br />
                <br />I serve as an advisor to{" "}
                <LinkPreview
                  url="https://thesiliconproject.org"
                  className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold"
                >
                  The Silicon Project
                </LinkPreview>
                , a nonprofit donating electronics to underserved communities,
                where I previously led the IT department. Before transitioning
                to software, I researched molecular pharmacology at the{" "}
                <LinkPreview
                  url="https://www.mskcc.org/research/ski/labs/jan-grimm"
                  className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent font-bold"
                >
                  Grimm Lab
                </LinkPreview>{" "}
                at Memorial Sloan Kettering Cancer Center, investigating
                statin-based approaches to improve nanomedicine delivery for
                cancer treatment.
                <br />
                <br />
                Outside of tech, I'm passionate about working out, meal prep,
                movies, reading, basketball, and hiking.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
