import { nameToLogo } from "../constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Tools() {
  return (
    <div>
      <div className="flex justify-center">
        <p className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 items-center text-left">
          Here are some <span className="font-semibold">tools</span> I've used in past
          jobs and projects. Hover over each one to learn more about my
          development journey.
        </p>
      </div>

      <div className="h-4" />
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
