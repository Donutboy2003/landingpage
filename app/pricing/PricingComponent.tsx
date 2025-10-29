"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function PricingComponent() {
  return (
    <div>
      <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
        <div className="mx-auto mt-5 max-w-2xl text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Pricing
          </h1>
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-muted-foreground text-xl">
            Perfect for local commutes. Save money on every trip while helping
            drivers cover fuel costs. It's ride sharing done right.
          </p>
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <div className="rounded-xl border border-gray-300 shadow-xl w-full flex flex-col justify-between h-64 py-4 px-6">
            <div className="w-full flex flex-row items-center justify-between">
              <p className="text-3xl font-semibold">Tuk Rides</p>
              <div className="flex flex-col items-end">
                <div className="flex flex-row items-start">
                  <p className="text-4xl">Fixed cost</p>
                </div>
                <p className="text-lg"> + cost/km</p>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4">
              <div className="flex flex-col space-y-2 items-start text-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>
                  <strong>No upfront costs.</strong>&nbsp;Pay only for what you
                  travel
                </p>
              </div>
              <div className="flex flex-col space-y-2 items-start text-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>
                  <strong>Seamless verification process</strong>&nbsp;for
                  drivers
                </p>
              </div>
              <div className="flex flex-col space-y-2 items-start text-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>
                  <strong>Low payout thresholds</strong>&nbsp;so drivers get
                  paid faster
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 max-w-2xl text-center">
          <Button onClick={() => (window.location.href = "/")}>
            Join Waitlist Now
          </Button>
        </div>
      </div>
    </div>
  );
}
