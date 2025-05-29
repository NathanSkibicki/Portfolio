import Link from "next/link";
import Image from "next/image";
import SpotifyCurrentSong from "@/components/spotify/spotify";
import Experience from "@/components/about/experience";
import { Separator } from "@/components/ui/separator";
import UltimateCoders from "@/public/images/projects/ultimatecoderss.png";
import MHI from "@/public/images/projects/Mitsubishi.png";
import Aura from "@/public/images/projects/Aura.jpg";
import { ExternalLink } from "lucide-react";

export default function About() {
  return (
    <main
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8 md:gap-15 gap-8 cursor-default"
      id="about"
    >
      <div className="flex justify-center items-center mb-10 order-2 md:order-1">
        <Image
          src={Aura}
          alt="me"
          width={375}
          height={600}
          className="rounded-xl h-auto"
          priority
        />
      </div>

      <div className="flex text-primary order-1 md:order-2">
        <div className="space-y-12 flex flex-col items-center md:items-start max-w-md">
          <section className="mb-6">
            <h2 className="text-4xl font-semibold mb-3 text-primary">
              About Me
            </h2>
            <p className="text-lg mb-6">
              Software engineer, designer, and studying Computer Science at
              Western University. Currently at Mitsubishi Heavy Industries.
            </p>

            <div className="flex items-center">
              <p className="text-lg mb-6">
                Engineering the future.{" "}
                <span className="group inline-flex items-center gap-1 cursor-pointer">
                  <a
                    href="/resume/Nathan Skibicki Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground group-hover:text-primary underline underline-offset-5 decoration-primary/50 group-hover:decoration-primary transition duration-300 ease-in-out"
                  >
                    Resume
                  </a>
                  <ExternalLink
                    strokeWidth={1.5}
                    className="text-muted-foreground group-hover:text-primary transition duration-300 ease-in-out transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </p>
            </div>

            <div className="relative">
              <Experience
                company="Mitsubishi Heavy Industries Regional Jet"
                jobTitle="Data Analyst Intern"
                date="Summer 2025"
                img={MHI}
                color="bg-red-400"
                url="https://mhirj.com/"
              />

              <Experience
                company="Mitsubishi Heavy Industries Regional Jet"
                jobTitle="RCA Fullstack Developer"
                date="Summer 2024 - Winter 2024"
                img={MHI}
                color="bg-red-400"
                url="https://mhirj.com/"
              />

              <Experience
                company="Ultimate Coders"
                jobTitle="Programming Instructor"
                date="Summer 2023"
                img={UltimateCoders}
                color="bg-blue-400"
                url="https://ultimatecoders.com"
              />
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <p className="text-lg mb-3">I&apos;m currently listening to</p>
            <div className="flex justify-center lg:justify-start">
              <SpotifyCurrentSong />
            </div>
          </section>

          <div className="flex h-5 items-center space-x-4 mb-3 justify-center lg:justify-start font-light">
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              projects
            </Link>
            
            <Separator orientation="vertical" />
            <Link
              href="/notes"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              notes
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="https://github.com/NathanSkibicki"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              github
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="https://www.linkedin.com/in/nathan-skibicki-71b03b223/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              linkedin
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
