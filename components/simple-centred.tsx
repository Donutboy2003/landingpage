"use client";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

export default function HeroSectionSimpleCentred() {

  const [email, setEmail] = useState("");

  const handleWaitlistSubmit = () => {
    // e.preventDefault();
    // Handle waitlist submission here
    console.log("Email submitted:", email);
    // add  API call or form submission logic here
  };

  return (
    <>
      {/* Hero */}
      <div>
        <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            {/* <a
              className="inline-flex items-center gap-x-2 rounded-full border p-1 ps-3 text-sm transition"
              href="#"
            >
              PRO release - Join to waitlist
              <span className="bg-muted-foreground/15 inline-flex items-center justify-center gap-x-2 rounded-full px-2.5 py-1.5 text-sm font-semibold">
                <svg
                  className="h-4 w-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a> */}
          </div>
          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Your Everyday Ride, Shared.
            </h1>
          </div>
          {/* End Title */}
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-muted-foreground text-xl">
              Perfect for local commutes. Save money on every trip while helping drivers cover fuel costs. It’s ride sharing done right.
            </p>
            {/* Perfect for daily city commutes. Save money on every trip while helping drivers cover fuel costs. 
            Affordable daily commutes and short trips that save passengers money and help drivers with fuel costs. */}
          </div>

          {/* Waitlist Form */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                required
              />
              <Button onClick={handleWaitlistSubmit} size="default">
                Join Waitlist
              </Button>
            </div>
          </div>
          {/* End Waitlist Form */}

          {/* Buttons */}
          {/* <div className="mt-8 flex justify-center gap-3">
            <Button size={"lg"}>Get started</Button>
            <Button size={"lg"} variant={"outline"}>
              Learn more
            </Button>
          </div> */}
          {/* End Buttons */}
          {/* <div className="mt-5 flex items-center justify-center gap-x-1 sm:gap-x-3">
            <span className="text-muted-foreground text-sm">
              Package Manager:
            </span>
            <span className="text-sm font-bold">npm </span>
            <svg
              className="text-muted-foreground h-5 w-5"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
            <a
              className="inline-flex items-center gap-x-1 text-sm font-medium decoration-2 hover:underline"
              href="#"
            >
              Installation Guide
              <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />
            </a>
          </div> */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
