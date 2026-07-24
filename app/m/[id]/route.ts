import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { parse } from "csv-parse/sync";

type Row = {
  id: string;
  name: string;
  designation: string;
  active: string;
  redirect: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const csvPath = path.join(process.cwd(), "data", "redirects.csv");

  const csv = await fs.readFile(csvPath, "utf8");

  const rows = parse(csv, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as Row[];

  const member = rows.find(
    (r) => r.id === id && r.active.toLowerCase() === "true"
  );

  if (!member) {
    return new NextResponse("QR Not Found", { status: 404 });
  }

  return NextResponse.redirect(member.redirect, 302);
}