import { FC } from "react";

const ResumePage: FC = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/LiJeffreyResume.docx.pdf"
        className="w-full h-full"
        title="Jeffrey Li's Resume"
      />
    </div>
  );
};

export default ResumePage;