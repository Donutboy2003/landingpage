"use client";

import { COLOR_PALETTE } from "@/interfaces/color_palette";
import {
  Car,
  Users,
  Clock,
  ShieldCheck,
  DollarSign,
  Smartphone,
} from "lucide-react";

export default function HeroBenefits() {
  const benefits = [
    {
      icon: Car,
      title: "Affordable Rides",
      text: "Share rides with others and cut down your daily commute costs effortlessly.",
    },
    {
      icon: Users,
      title: "Community Driven",
      text: "Meet new people, make friends, and travel together in a trusted network.",
    },
    {
      icon: Clock,
      title: "Time Efficient",
      text: "Find quick matches and get to your destination faster with optimized routes.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Verified",
      text: "Enjoy peace of mind with driver verification, ride tracking, and in-app safety tools.",
    },
    {
      icon: DollarSign,
      title: "Earn While You Drive",
      text: "Drivers can earn extra income by sharing empty seats during their regular commutes.",
    },
    {
      icon: Smartphone,
      title: "Seamless App Experience",
      text: "Book, chat, and track your rides — all in one easy-to-use mobile app.",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
        <div className="mx-auto mt-5 max-w-3xl text-center flex flex-col items-center space-y-8">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Experience a smarter, safer, and more sustainable way to travel.
          </h1>
          <div className="border border-gray-200 rounded-xl w-full flex flex-col items-start justify-center p-6 bg-white shadow-sm">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm sm:text-lg">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col space-y-2 items-start text-start"
                >
                  <b.icon
                    className="size-7"
                    strokeWidth={1.5}
                    color={COLOR_PALETTE.BLUE}
                  />
                  <p>
                    <strong>{b.title}.</strong>&nbsp;{b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
