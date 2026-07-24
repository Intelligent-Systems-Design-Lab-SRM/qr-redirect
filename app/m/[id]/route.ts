import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { parse } from "csv-parse/sync";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const file = path.join(process.cwd(), "data", "redirects.csv");
  const csv = await fs.readFile(file, "utf8");

  const rows = parse(csv, {
    columns: true,
    skip_empty_lines: true,
  });

  const member = rows.find(
    (row: any) =>
      row.id === id &&
      row.active.toLowerCase() === "true"
  );

  if (!member) {
    return new NextResponse("QR Not Found", {
      status: 404,
    });
  }

  return NextResponse.redirect(member.redirect, 302);
}