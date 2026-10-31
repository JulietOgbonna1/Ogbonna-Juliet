import { ImageResponse } from "next/og";

export const alt = "Juliet Ogbonna | Frontend Developer & UI Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(circle at 85% 20%, rgba(255,106,0,0.45), transparent 55%), #0a0a0a",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#ff6a00", letterSpacing: 6, textTransform: "uppercase" }}>Portfolio</div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, marginTop: 16 }}>Juliet Ogbonna</div>
        <div style={{ display: "flex", fontSize: 40, color: "#d4d4d4", marginTop: 12 }}>
          Frontend Developer & UI Designer
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 48, fontSize: 24 }}>
          {["React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB"].map((t) => (
            <div key={t} style={{ display: "flex", border: "2px solid #ff6a00", borderRadius: 999, padding: "8px 22px" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
