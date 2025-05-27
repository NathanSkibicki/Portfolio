"use client";
import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import projects from "./projects.json";
import resumeswap from "@/public/images/projects/resumeswap.png";
import vectorclock from "@/public/images/projects/vectorclock.png";
import tutor from "@/public/images/projects/tutor.png";
import grpc from "@/public/images/projects/grpc.png";
import primarybackup from "@/public/images/projects/primarybackup.png";
import sportek from "@/public/images/projects/sportek.png";
import wordle from "@/public/images/projects/wordle.png";
import spotify from "@/public/images/projects/spotify.webp";

interface Project {
  title: string;
  description: string;
  header: string;
  icon: string;
  url: string;
}

export default function Projects() {
  const mapping = {
    resumeswap: resumeswap,
    vectorclock: vectorclock,
    tutor: tutor,
    grpc: grpc,
    primarybackup: primarybackup,
    sportek: sportek,
    wordle: wordle,
    spotify: spotify,
  };
  return (
    <div className="min-h-screen p-6 my-15">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <div className="w-fit">
            <Link href="/">
              <ArrowLeft className="h-6 w-6 mb-8 text-muted-foreground hover:text-white transition-colors" />
            </Link>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-5xl font-bold mb-3">Projects</h1>
              <p className="text-muted-foreground flex items-center gap-1">
                Source code on{" "}
                <Link
                  href="https://github.com/NathanSkibicki"
                  className="hover:text-white transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <Github className="h-4 w-4" />
                </Link>
              </p>
            </div>
          </div>
        </header>
        <BentoGrid className="max-w-8xl mx-auto grid-cols-1 md:grid-cols-2">
          {projects.map((item: Project, i: number) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={
                <Image
                  src={mapping[item.header as keyof typeof mapping] || null}
                  alt={item.title}
                  className="w-full h-auto object-contain data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-600/10"
                  data-loaded="false"
                  onLoad={(event) => {
                    event.currentTarget.setAttribute("data-loaded", "true");
                  }}
                />
              }
              icon={item.icon}
              href={item.url}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
