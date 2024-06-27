import { nameToLogo } from "../constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Tools() {
  return (
    <div>
      <div className="flex justify-center">
        <p className="max-w-4xl bg-white shadow-lg rounded-lg p-6 items-center text-left">
          Here are some tools I've used in the past in my jobs and projects.
          Here are some tools I've used in the past in my jobs and projects.
        </p>
      </div>

        <div className="h-4"/>
      <div className="flex justify-center">
        <InfiniteMovingCards
          items={nameToLogo}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
