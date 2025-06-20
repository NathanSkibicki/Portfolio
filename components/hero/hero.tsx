"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { LegoScene } from "./lego-model";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen cursor-default">
      <header className="pt-6 px-6 md:px-12">
        <nav className="flex justify-center space-x-8 relative z-10 mt-1 font-light">
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            about
          </Link>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            projects
          </Link>
          
          <a
            href="./resume/Nathan_Skibicki_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            resume
          </a>
        </nav>
      </header>

      <div className="absolute inset-0 z-1">
        <LegoScene />
        <ShootingStars />
        <StarsBackground />
      </div>

      <main className="flex-1 flex flex-col justify-center items-center px-6 relative z-10">
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl md:text-7xl font-bold mb-5 text-white/85 group w-fit">
            <span className="text-violet-500 group-hover:text-purple-500 transition-colors">
              [nathan skibicki
            </span>
            <span className="group-hover:text-white transition-colors"> ~</span>
            <span className="text-violet-500 group-hover:text-purple-500 transition-colors">
              {" "}
              ]
            </span>
            <span className="group-hover:text-white transition-colors"> $</span>
          </h1>

          <div className="flex h-5 items-center space-x-3">
            <p className="text-md md:text-xl text-muted-foreground">
              <span className="italic">/ ski - bih - kee /</span>
            </p>
            <Separator orientation="vertical" />
            <p className="text-md md:text-xl text-muted-foreground">
              software engineer and cs student
            </p>
          </div>

          <div className="mt-8 flex space-x-6 inset-0 z-1">
            <Link
              href="https://github.com/NathanSkibicki"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nathan-skibicki-71b03b223/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nathans.skibicki@gmail.com&su=&body=Hello%20Nathan!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
