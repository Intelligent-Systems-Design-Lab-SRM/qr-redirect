import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { parse } from "csv-parse/sync";

type Row = {
  id: string;
  active: string;
  redirect: string;
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const csvPath = path.join(
    process.cwd(),
    "data",
    "redirects.csv"
  );

  const csv = await fs.readFile(csvPath, "utf8");

  const rows = parse(csv, {
    columns: true,
    trim: true,
    skip_empty_lines: true,
  }) as Row[];

  const member = rows.find(
    (r) =>
      r.id === id &&
      r.active.toLowerCase() === "true"
  );

  if (!member) {
    return NextResponse.redirect(new URL("/m", req.url));
  }

  return NextResponse.redirect(member.redirect);
}