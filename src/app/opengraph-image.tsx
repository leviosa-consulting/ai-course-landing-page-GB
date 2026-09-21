import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { course } from "@/content/course";
import { stripEmphasis } from "@/lib/emphasis";

// Default link preview for WhatsApp, LinkedIn, etc.
// To use a designed image instead, delete this file and add src/app/opengraph-image.png (1200×630).
export const alt = course.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/GB-logo-purple-bg.png"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#59265d",
          color: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
        <img src={`data:image/png;base64,${logo.toString("base64")}`} width={259} height={105} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#ffc944", textTransform: "uppercase", letterSpacing: 2 }}>{course.hero.eyebrow}</div>
          <div style={{ marginTop: 18, fontSize: 66, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
            {stripEmphasis(course.hero.headline)}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 28 }}>
          <div style={{ display: "flex", background: "#238147", borderRadius: 999, padding: "14px 30px", fontWeight: 700 }}>
            Chat with us on WhatsApp
          </div>
          <div style={{ color: "#ceb3d1" }}>gentlebamboo.com</div>
        </div>
      </div>
    ),
    size,
  );
}
