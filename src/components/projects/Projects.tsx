"use client";

import React from "react";
import { AiFillGithub } from "react-icons/ai";
import ProjectCard from "@/components/projects/ProjectCard";
import type { Project } from "@/types/projects";

const Projects = () => {
    return (
        <div className="">
            <div className="flex justify-center mb-10">
                <p className="max-w-4xl w-full bg-white shadow-xs rounded-lg p-6 items-center text-left">
                    My projects include a mixture of full stack side projects
                    and machine learning research projects.
                </p>
            </div>

            <div className="flex items-center justify-center">
                <div className="max-w-4xl">
                    <div className="">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const fillerImage =
    "https://st4.depositphotos.com/9485312/21658/i/600/depositphotos_216581194-stock-photo-illustration-orange-polygonal-nice-multicolor.jpg";

const projects: Project[] = [
    {
        title: "Improved RAG for Financial QA",
        imageURL: "/projects/nlp_final_project.png",
        body: "A multi-stage RAG architecture for financial document question answering that combines document-level routing, dense retrieval, cross-encoder reranking, and reduced-context LLM querying. Improves accuracy from 72% to 92% on financial QA tasks while reducing token costs by 100x compared to raw LLM processing.",
        tools: ["Python", "NLP", "RAG", "GPT-4"],
        demo: "/NLP_final_project.pdf",
        source: "/NLP_final_project.pdf",
    },
    {
        title: "Adapting Token Pruning Methods from BERT to GPT-2",
        imageURL: "/projects/hybrid-pruning-blog/images/GPT_architecture.png",
        body: "Research investigating dynamic token pruning in autoregressive transformers to reduce computational costs while maintaining generation quality. Combines Learned Token Pruning (LTP) with reinforcement learning-based Dynamic Token Reduction to adaptively remove unimportant tokens during inference.",
        tools: ["Python", "PyTorch", "NLP", "Deep Learning"],
        demo: "/projects/hybrid-pruning-blog/index.html",
        source: "/projects/hybrid-pruning-blog/index.html",
    },
    {
        title: "Casava",
        imageURL: "/projects/casava old landing.png",
        body: "Search engine for college students to find apartments and sublets. Scrapes Facebook, Craigslist, Airbnb, and various other sites for listings. Backed by MIT Sandbox funding.",
        tools: ["Next.js", "Express", "Prisma", "Webscraping"],
        demo: "https://casava-v2.vercel.app",
        source: "https://github.com/jefffreyli/casava-open",
    },
    {
        title: "Jeffrey's MacBook",
        imageURL: "/projects/jeffrey's macbook.png",
        body: "A personal website with a MacOS-style interface featuring a dock menu and apps like Finder, Notes, Spotify, Photos, Email, and Messages. Navigate to the Messages app to chat with an AI version of myself.",
        tools: ["Next.js", "Tailwind", "Gemini"],
        demo: "https://macos.jeffreyli.me",
        source: "https://github.com/jefffreyli/macos-personal-website",
    },
    {
        title: "MarketOwl",
        imageURL: "/projects/marketowl demo.png",
        body: "An AI negotiation assistant for Facebook Marketplace that analyzes listings and seller messages to help you get better deals. Just paste a listing URL and get personalized negotiation messages optimized for that specific seller.",
        tools: ["Next.js", "Tailwind", "FastAPI", "Ollama", "Llama", "Modal"],
        demo: "https://devpost.com/software/market-owl?ref_content=my-projects-tab&ref_feature=my_projects",
        source: "https://github.com/rayedchow/marketowl",
    },
    {
        title: "Visage",
        imageURL: "/projects/visage-ui-2.png",
        body: "A video editor that automatically creates highlight montages by syncing audio beat drops with key moments in your footage. Upload your clips (basketball, gaming, etc.) and audio - the algorithm handles the editing to create seamless highlight reels.",
        tools: ["Next.js", "Tailwind", "Firebase", "FFmpeg"],
        demo: undefined,
        source: "https://github.com/jefffreyli/video-editing-platform",
    },
    {
        title: "SciClubs",
        imageURL: "/projects/bxsci clubs logo.png",
        body: "A mobile app for students to browse school clubs, join activities, and track their schedules through a personalized calendar. Club leaders can take attendance and make announcements. Built as my introduction to full-stack development with authentication and database features, presented at the Bronx Borough Science Expo.",
        tools: ["Flutter", "Dart", "Firebase"],
        demo: "http://sciclubs.vercel.app/",
        source: "https://github.com/jefffreyli/Club-App",
    },
    {
        title: "Bronx Science NHS Website",
        imageURL: "/projects/bxsci_nhs_website.png",
        body: "The official site for the Bronx Science National Honor Society (NHS) provides details on the application process, member responsibilities, and tutoring forms. Created as my first web development project, it is now used and maintained by student leaders at Bronx Science.",
        tools: ["React.js", "Tailwind"],
        demo: "https://bxscinhs.vercel.app/",
        source: "https://github.com/jefffreyli/Bronx-Science-NHS",
    },
    {
        title: "Improve Nanomedicine for Cancer Project",
        imageURL: "/projects/cancer research project poster.png",
        body: "Wet lab research investigating how statins can reduce nanoparticle uptake in macrophages to enhance cancer treatment effectiveness. Developed skills in cell culture, flow cytometry, and western blot analysis.",
        tools: ["Excel", "Prism"],
        demo: "https://www.linkedin.com/in/jefffrey-li/details/experience/2060961381/multiple-media-viewer/?profileId=ACoAADiAuPQBFCKQL3t4L0u_pPVC8mdDT-TN46o&treasuryMediaId=1635529469556&type=DOCUMENT",
        source: "https://www.linkedin.com/in/jefffrey-li/details/experience/2060961381/multiple-media-viewer/?profileId=ACoAADiAuPQBFCKQL3t4L0u_pPVC8mdDT-TN46o&treasuryMediaId=1635529471381&type=DOCUMENT",
    },
    {
        title: "3D Animation of Cancer",
        imageURL: "/projects/3d animation dna.png",
        body: "A fully animated project created in Autodesk Maya and edited in Adobe Premiere. All 3D models were built and rendered in Maya, with Python scripts used to automate repetitive tasks like randomizing DNA helix and cell positions. Created as a final project for MITES Semester 2023.",
        tools: ["Python", "Maya"],
        demo: "https://www.youtube.com/watch?v=mRDQ30rnnb4",
        source: undefined,
    },
];

export default Projects;
