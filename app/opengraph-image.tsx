import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.author.jobTitle}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 75% 20%, rgba(181,255,89,0.22), transparent 30%), linear-gradient(135deg, #07100b 0%, #050505 52%, #0b1308 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          overflow: "hidden",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(181,255,89,0.4)",
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            padding: "64px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#b5ff59",
              display: "flex",
              fontSize: 28,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Web Development & FiveM Experiences
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              display: "flex",
              fontSize: 28,
            }}
          >
            {siteConfig.author.name} · Malang, Indonesia
          </div>
        </div>
      </div>
    ),
    size,
  );
}
