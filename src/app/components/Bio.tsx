import BioHeader from "./BioHeader";
import { LinkPreview } from "./ui/link-preview";

const Bio = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 -mb-32">
          <div className="max-w-4xl text-black">
            <BioHeader />

            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="">
                I’m a sophomore at{" "}
                <LinkPreview
                  url="https://mit.edu"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-red-800"
                >
                  MIT
                </LinkPreview>{" "}
                studying computer science and business analytics. I’m currently
                working at{" "}
                <LinkPreview
                  url="https://aws.amazon.com/"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-red-800"
                >
                  Amazon Web Services
                </LinkPreview>{" "}
                as a software development engineering intern working on
                serverless computing on the Fargate Placement team. I am also
                working as a developer part time at Recovering Bro, a startup
                building a cross platform health and wellness app that fits in
                your pocket.{" "}
              </p>
              <p className="mt-4">
                In the past, I was the director of the IT division of{" "}
                <LinkPreview
                  url="https://ecoaccess.org/"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-blue-800"
                >
                  EcoAccess{" "}
                </LinkPreview>{" "}
                , a nonprofit focusing on electronics donations to individuals
                and organizations in need. I now take on an advisory role in the
                organization’s IT and operations.
              </p>
              <p className="mt-4">
                Before all of that, I was a molecular pharmacology research
                intern in the{" "}
                <LinkPreview
                  url="https://www.mskcc.org/research/ski/labs/jan-grimm"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-indigo-800"
                >
                  Grimm Lab{" "}
                </LinkPreview>{" "}
                at Memorial Sloan Kettering Cancer Center, running experiments
                using statins to inhibit Feraheme nanoparticle internalization
                in Macrophages to improve nanomedicine for cancer. I picked up
                wet lab skills in cell culture, viability assays, colorimetric
                assays, flow cytometry, and western blotting along the way.
              </p>
              <p className="mt-4">
                In my free time, I like to bike, go to the gym, watch movies,
                and immerse myself in startup culture.
              </p>
              <p className="mt-4">Below are some of my projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
