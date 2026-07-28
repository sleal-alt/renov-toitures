"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", color: "#ccc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px 32px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }}>

        {/* Col 1 */}
        <div>
          <h3 style={{ color: "white", fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Renov Toiture</h3>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#aaa", marginBottom: 16 }}>
            Votre entreprise de rénovation de toiture à Bonne en Haute – Savoie.
          </p>
          <span style={{ color: "#F5A524", fontWeight: 700, fontSize: 14 }}>Nos prestations sont garanties décennale</span>
        </div>

        {/* Col 2 */}
        <div>
          <h3 style={{ color: "white", fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Mentions Légales</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { label: "CGU", href: "/legal" },
              { label: "Politique de confidentialité", href: "/legal" },
              { label: "Mentions légales", href: "/legal" },
            ].map(({ label, href }) => (
              <li key={label} style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l4 4 6-8" stroke="#F5A524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Link href={href} style={{ color: "#aaa", textDecoration: "none", fontSize: 14 }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h3 style={{ color: "white", fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Contact</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { icon: "📞", text: "Tél: 06 03 53 84 00", href: "tel:0603538400" },
              { icon: "🕐", text: "Lun-Ven : 8h - 19h" },
              { icon: "📍", text: "74380 Bonne" },
              { icon: "✉️", text: "contact@renover-ma-toiture.fr", href: "mailto:contact@renover-ma-toiture.fr" },
            ].map(({ icon, text, href }) => (
              <li key={text} style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#aaa" }}>
                <span>{icon}</span>
                {href ? <a href={href} style={{ color: "#aaa", textDecoration: "none" }}>{text}</a> : <span>{text}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #2a2a2a", padding: "16px 20px", textAlign: "center", fontSize: 13, color: "#555" }}>
        © {new Date().getFullYear()} Rénover ma Toiture — Tous droits réservés
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
