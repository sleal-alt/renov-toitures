"use client";
import { useState } from "react";
import Image from "next/image";

export default function ServiceCard({ title, icon, items, images, video }) {
  const [idx, setIdx] = useState(0);

  return (
    <div style={{ background: "white", borderRadius: 8, padding: "28px 20px 0", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
      <div style={{ marginBottom: 12 }}>{icon}</div>
      <h3 style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", color: "#1a1a1a", marginBottom: 14, letterSpacing: 0.5 }}>{title}</h3>
      <ul style={{ paddingLeft: 18, margin: "0 0 20px", color: "#555", fontSize: 14, lineHeight: 2 }}>
        {items.map(it => <li key={it}>{it}</li>)}
      </ul>

      {/* Media */}
      {video ? (
        <div style={{ position: "relative", height: 220, background: "#000", overflow: "hidden" }}>
          <iframe
            src={video}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      ) : images && images.length > 1 ? (
        <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
          {/* Before/after side by side */}
          <div style={{ display: "flex", height: "100%" }}>
            {images.slice(0, 2).map((src, i) => (
              <div key={i} style={{ flex: 1, position: "relative" }}>
                <Image src={src} alt={i === 0 ? "Avant" : "Après"} fill style={{ objectFit: "cover" }} />
                <span style={{ position: "absolute", top: 8, left: 8, background: "rgba(50,50,50,0.75)", color: "white", fontSize: 12, fontWeight: 700, padding: "3px 8px" }}>
                  {i === 0 ? "Avant" : "Après"}
                </span>
              </div>
            ))}
          </div>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", display: "flex", gap: 4, zIndex: 2 }}>
            <button style={{ background: "#FF9800", border: "none", color: "white", width: 28, height: 28, cursor: "pointer", fontWeight: 700, borderRadius: 2 }}>‹</button>
            <button style={{ background: "#FF9800", border: "none", color: "white", width: 28, height: 28, cursor: "pointer", fontWeight: 700, borderRadius: 2 }}>›</button>
          </div>
        </div>
      ) : images && images.length === 1 ? (
        <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
          <Image src={images[0]} alt={title} fill style={{ objectFit: "cover" }} />
        </div>
      ) : null}
    </div>
  );
}
