"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", color: "#ccc", paddingTop: 48 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, paddingBottom: 40 }}>

        {/* Logo + desc */}
        <div>
          <Image src="/images/logo-blanc.png" alt="Renov Toitures" width={140} height={70} style={{ objectFit: "contain", marginBottom: 16 }} />
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#aaa" }}>
            Artisan couvreur depuis plus de 20 ans en Haute-Savoie. Spécialiste en rénovation de toiture et façades à Bonne.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ color: "#F5A524", fontSize: 16, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Contact</h3>
          <p style={{ fontSize: 14, lineHeight: 2, color: "#aaa" }}>
            1119 Route des Alluaz<br />
            74380 Bonne<br />
            <a href="tel:0603538400" style={{ color: "#F5A524", textDecoration: "none", fontWeight: 700 }}>06 03 53 84 00</a><br />
            <a href="mailto:reinhart.patrick@yahoo.fr" style={{ color: "#aaa", textDecoration: "none" }}>reinhart.patrick@yahoo.fr</a>
          </p>
        </div>

        {/* Horaires */}
        <div>
          <h3 style={{ color: "#F5A524", fontSize: 16, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Horaires</h3>
          <p style={{ fontSize: 14, lineHeight: 2, color: "#aaa" }}>
            Lundi – Vendredi<br />
            8h00 – 18h00<br />
            <span style={{ color: "#F5A524" }}>Devis gratuit sur rendez-vous</span>
          </p>
        </div>

        {/* Liens */}
        <div>
          <h3 style={{ color: "#F5A524", fontSize: 16, fontWeight: 700, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Navigation</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { label: "Accueil", href: "/" },
              { label: "Entreprise", href: "/entreprise" },
              { label: "Nos Services", href: "/nos-services" },
              { label: "Galerie", href: "/galerie" },
              { label: "Contact", href: "/contact" },
              { label: "Mentions légales", href: "/legal" },
            ].map(({ label, href }) => (
              <li key={href} style={{ marginBottom: 8 }}>
                <Link href={href} style={{ color: "#aaa", textDecoration: "none", fontSize: 14 }}
                  onMouseEnter={e => e.target.style.color = "#F5A524"}
                  onMouseLeave={e => e.target.style.color = "#aaa"}
                >{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #333", padding: "16px 20px", textAlign: "center", fontSize: 13, color: "#666" }}>
        © {new Date().getFullYear()} Rénover ma Toiture — 1119 Route des Alluaz, 74380 Bonne — Tous droits réservés
      </div>
    </footer>
  );
}
