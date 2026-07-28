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
    <header style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
      {/* Top bar */}
      <div style={{ borderBottom: "1px solid #f0f0f0", padding: "8px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#555", fontSize: 14 }}>
            <span>🕐</span>
            <span>Lun - Ven : 8h – 18h00</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#F5A524" }}>📞</span>
            <div>
              <div style={{ fontSize: 11, color: "#888" }}>Appelez Nous :</div>
              <a href="tel:0603538400" style={{ fontSize: 20, fontWeight: 700, color: "#222", textDecoration: "none" }}>06 03 53 84 00</a>
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ background: "#F5A524" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
            <Image src="/images/logo-blanc.png" alt="Renov Toitures" width={120} height={60} style={{ objectFit: "contain" }} />
          </Link>

          {/* Desktop nav */}
          <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: 0 }} className="desktop-nav">
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} style={{ display: "block", padding: "18px 20px", color: "white", textDecoration: "none", fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: 0.5, transition: "background 0.2s" }}
                  onMouseEnter={e => e.target.style.background = "rgba(0,0,0,0.15)"}
                  onMouseLeave={e => e.target.style.background = "transparent"}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "white", fontSize: 24, cursor: "pointer", padding: 8 }} className="mobile-burger">
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul style={{ listStyle: "none", margin: 0, padding: 0, background: "#e8950f" }} className="mobile-menu">
            {NAV.map(({ label, href }) => (
              <li key={href} style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
                <Link href={href} onClick={() => setOpen(false)} style={{ display: "block", padding: "14px 20px", color: "white", textDecoration: "none", fontWeight: 600, fontSize: 14, textTransform: "uppercase" }}>
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
