import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const SubscribeSchema = z.object({
  Email: z.string().email().transform((v) => v.trim().toLowerCase()),
});

export async function POST(req: Request) {
  try {
    const { Email } = SubscribeSchema.parse(await req.json());

    const Url = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").trim();
    const Key = (process.env.SUPABASE_SERVICE_ROLE_KEY ?? "").trim();

    if (!Url || !Key) {
      return NextResponse.json(
        { Ok: false, Error: "Missing Supabase env vars." },
        { status: 500 }
      );
    }

    const Sb = createClient(Url, Key, { auth: { persistSession: false } });

    const { error } = await Sb
      .from("subscribers")
      .upsert({ email: Email }, { onConflict: "email", ignoreDuplicates: true });

    if (error) {
      return NextResponse.json(
        { Ok: false, Error: `Upsert error: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ Ok: true });
  } catch (Err: unknown) {
    const Msg = Err instanceof Error ? Err.message : "unknown";
    return NextResponse.json(
      { Ok: false, Error: `Server error: ${Msg}` },
      { status: 500 }
    );
  }
}
