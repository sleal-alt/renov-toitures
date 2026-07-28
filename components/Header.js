"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Entreprise", href: "/entreprise" },
  { label: "Nos Services", href: "/nos-services" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      {/* Top bar : logo gauche + infos droite */}
      <div style={{ background: "#fff", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Renov Toitures" width={150} height={75} style={{ objectFit: "contain" }} />
        </Link>
        <div style={{ display: "flex", gap: 40, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#FF9800", fontSize: 22 }}>🕐</span>
            <span style={{ fontSize: 16, fontWeight: 600, color: "#333" }}>Lun - Ven : 8h – 18h00</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#FF9800", fontSize: 22 }}>📞</span>
            <div>
              <div style={{ fontSize: 13, color: "#888", fontWeight: 600 }}>Appelez Nous :</div>
              <a href="tel:0603538400" style={{ fontSize: 22, fontWeight: 800, color: "#222", textDecoration: "none" }}>06 03 53 84 00</a>
            </div>
          </div>
        </div>
      </div>

      {/* Barre nav orange */}
      <nav style={{ background: "#FF9800", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Desktop nav */}
          <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
            {NAV.map(({ label, href }, i) => (
              <li key={href}>
                <Link href={href} style={{
                  display: "block",
                  padding: "16px 22px",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  background: i === 0 ? "rgba(0,0,0,0.25)" : "transparent",
                }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icône loupe */}
          <button style={{ background: "none", border: "none", color: "white", fontSize: 20, cursor: "pointer", padding: "16px 20px" }} className="desktop-nav">🔍</button>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "white", fontSize: 24, cursor: "pointer", padding: 14 }} className="mobile-burger">
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul style={{ listStyle: "none", margin: 0, padding: 0, background: "#e8950f" }} className="mobile-menu">
            {NAV.map(({ label, href }) => (
              <li key={href} style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
                <Link href={href} onClick={() => setOpen(false)} style={{ display: "block", padding: "14px 20px", color: "white", textDecoration: "none", fontWeight: 700, fontSize: 14, textTransform: "uppercase" }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <style jsx global>{`
        @media (min-width: 768px) { .mobile-burger { display: none !important; } .mobile-menu { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </header>
  );
}
