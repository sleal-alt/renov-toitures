"use client";
import { useState } from "react";
import Image from "next/image";

const FOURNISSEURS = [
  { name: "Point P", file: "point-p.png" },
  { name: "La Rivière", file: "lariviere.png" },
  { name: "Relius", file: "relius.png" },
  { name: "Sikkens", file: "sikkens-vector-logo.png" },
  { name: "Tollens", file: "01_boutique_logo_tollens.png" },
];

export default function FournisseursCarousel() {
  const [start, setStart] = useState(0);
  const visible = 3;
  const max = FOURNISSEURS.length - visible;

  return (
    <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
      <button
        onClick={() => setStart(s => Math.max(0, s - 1))}
        style={{ position: "absolute", left: -28, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: 24, color: "#aaa", cursor: "pointer" }}
      >‹</button>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 48 }}>
        {FOURNISSEURS.slice(start, start + visible).map(({ name, file }) => (
          <Image key={name} src={`/images/${file}`} alt={name} width={160} height={80} style={{ objectFit: "contain" }} />
        ))}
      </div>

      <button
        onClick={() => setStart(s => Math.min(max, s + 1))}
        style={{ position: "absolute", right: -28, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: 24, color: "#aaa", cursor: "pointer" }}
      >›</button>

      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
        {FOURNISSEURS.slice(0, FOURNISSEURS.length - visible + 1).map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i)}
            style={{ width: 10, height: 10, borderRadius: "50%", border: "none", background: i === start ? "#FF9800" : "#ddd", cursor: "pointer", padding: 0 }}
          />
        ))}
      </div>
    </div>
  );
}
