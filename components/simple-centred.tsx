"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSectionSimpleCentred() {
  const [Email, SetEmail] = React.useState("");
  const [IsSubmitting, SetIsSubmitting] = React.useState(false);
  const [Success, SetSuccess] = React.useState(false);
  const [ServerError, SetServerError] = React.useState<string | null>(null);

  const OnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      SetIsSubmitting(true);
      SetSuccess(false);
      SetServerError(null);

      const Res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email: Email.trim().toLowerCase() }),
      });

      const Data = await Res.json();
      if (!Res.ok || !Data?.Ok) throw new Error(Data?.Error ?? "Submission failed");

      SetSuccess(true);
      SetEmail("");
    } catch (Err: any) {
      SetServerError(Err?.message ?? "Something went wrong.");
    } finally {
      SetIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
        <div className="mx-auto mt-5 max-w-2xl text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Your Everyday Ride, Shared.
          </h1>
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-muted-foreground text-xl">
            Perfect for local commutes. Save money on every trip while helping drivers cover fuel costs. It’s ride sharing done right.
          </p>
        </div>

        {/* Waitlist Form */}
        <form onSubmit={OnSubmit} className="mx-auto mt-8 max-w-md">
          <div className="flex gap-2">
            <label htmlFor="WaitlistEmail" className="sr-only">Email</label>
            <input
              id="WaitlistEmail"
              type="email"
              placeholder="Enter your email"
              value={Email}
              onChange={(e) => SetEmail(e.target.value)}
              disabled={IsSubmitting}
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-60"
              required
            />
            <Button type="submit" disabled={IsSubmitting}>
              {IsSubmitting ? "Joining…" : "Join Waitlist"}
            </Button>
          </div>

          {Success && (
            <p className="mt-2 text-sm text-green-600 dark:text-green-400">
              Thanks! You’re on the list.
            </p>
          )}
          {ServerError && (
            <p className="mt-2 text-sm text-destructive">{ServerError}</p>
          )}
        </form>
        {/* End Waitlist Form */}
      </div>
    </div>
  );
}
