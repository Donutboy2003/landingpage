"use client";

import * as React from "react";
//import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function WaitlistInlineForm({ ClassName }: { ClassName?: string }) {
  const [Email, SetEmail] = React.useState("");
  const [IsSubmitting, SetIsSubmitting] = React.useState(false);
  const [Success, SetSuccess] = React.useState(false);
  const [ErrorMsg, SetErrorMsg] = React.useState<string | null>(null);

  const OnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      SetIsSubmitting(true);
      SetErrorMsg(null);
      SetSuccess(false);

      const Res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Email: Email.trim().toLowerCase(),
          SourcePath:
            typeof window !== "undefined" ? window.location.pathname : undefined,
        }),
      });

      const Data = await Res.json();
      if (!Res.ok || !Data?.Ok) {
        throw new Error(Data?.Error ?? "Submission failed");
      }

      SetSuccess(true);
      SetEmail("");
    } catch (Err: any) {
      SetErrorMsg(Err?.message ?? "Something went wrong.");
    } finally {
      SetIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={OnSubmit} className={["flex w-full max-w-lg gap-3", ClassName].filter(Boolean).join(" ")}>
      <label htmlFor="WaitlistEmail" className="sr-only">Email</label>
      <input
        id="WaitlistEmail"
        type="email"
        placeholder="you@example.com"
        required
        value={Email}
        onChange={(e) => SetEmail(e.target.value)}
      />
      <Button type="submit" disabled={IsSubmitting}>
        {IsSubmitting ? "Joining…" : "Join Waitlist"}
      </Button>

      {/* Inline feedback (optional) */}
      {Success && (
        <p className="sr-only" role="status">Thanks! You’re on the list.</p>
      )}
      {ErrorMsg && (
        <p className="sr-only" role="alert">{ErrorMsg}</p>
      )}
    </form>
  );
}
