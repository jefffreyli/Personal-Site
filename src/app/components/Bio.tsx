import BioHeader from "./BioHeader";
import { LinkPreview } from "./ui/link-preview";

const Bio = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center bg-gray-100 pt-4 lg:pt-24">
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
                studying computer science and business analytics. Currently, I’m
                a Software Development Engineering intern at{" "}
                <LinkPreview
                  url="https://aws.amazon.com/"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-red-800"
                >
                  Amazon Web Services
                </LinkPreview>{" "}
                , working on serverless containers with the Fargate Placement
                team. Additionally, I’m a part-time developer at Recovering Bro,
                a startup creating a cross-platform health and wellness app that
                fits in your pocket.{" "}
              </p>
              <p className="mt-4">
                Previously, I served as the Director of the IT division at{" "}
                <LinkPreview
                  url="https://ecoaccess.org/"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-blue-800"
                >
                  EcoAccess{" "}
                </LinkPreview>{" "}
                , a nonprofit focused on donating electronics to individuals and
                organizations in need. Now, I contribute to EcoAccess in an
                advisory role, focusing on IT and operations.
              </p>
              <p className="mt-4">
                Before all of that, I interned in molecular pharmacology
                research at the{" "}
                <LinkPreview
                  url="https://www.mskcc.org/research/ski/labs/jan-grimm"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-indigo-800"
                >
                  Grimm Lab{" "}
                </LinkPreview>{" "}
                at Memorial Sloan Kettering Cancer Center. There, I conducted
                experiments using statins to inhibit Feraheme nanoparticle
                internalization in macrophages, aiming to improve nanomedicine
                for cancer. During this time, I gained valuable wet lab skills
                in cell culture, viability assays, colorimetric assays, flow
                cytometry, and western blotting.
              </p>
              <p className="mt-4">
                In my free time, I enjoy biking, going to the gym, watching
                movies, and immersing myself in startup culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
