import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Rénover ma Toiture Haute-Savoie",
  description: "Contactez Rénover ma Toiture pour un devis gratuit. Artisan couvreur à Bonne (74). Tél : 06 03 53 84 00",
};

export default function Contact() {
  return (
    <>
      <section style={{ background: "#FF9800", padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ color: "white", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: 0 }}>Contact</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", marginTop: 8 }}>
          <Link href="/" style={{ color: "white" }}>Accueil</Link> &rsaquo; Contact
        </p>
      </section>

      <section style={{ padding: "64px 20px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48 }}>

          {/* Infos */}
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 24, color: "#1a1a1a" }}>Nos coordonnées</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: "📍", label: "Adresse", value: "1119 Route des Alluaz\n74380 Bonne" },
                { icon: "📞", label: "Téléphone", value: "06 03 53 84 00", href: "tel:0603538400" },
                { icon: "✉️", label: "Email", value: "reinhart.patrick@yahoo.fr", href: "mailto:reinhart.patrick@yahoo.fr" },
                { icon: "🕐", label: "Horaires", value: "Lundi – Vendredi\n8h00 – 18h00" },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, background: "#FF9800", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: 4, color: "#1a1a1a" }}>{label}</p>
                    {href ? (
                      <a href={href} style={{ color: "#555", textDecoration: "none", fontSize: 15 }}>{value}</a>
                    ) : (
                      <p style={{ color: "#555", fontSize: 15, whiteSpace: "pre-line", margin: 0 }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div style={{ marginTop: 32, borderRadius: 8, overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762!2d6.3994!3d46.1654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7c0b0a3c0001%3A0x0!2zQm9ubmUsIEZyYW5jZQ!5e0!3m2!1sfr!2sfr!4v1715000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localisation Rénover ma Toiture — Bonne 74"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 24, color: "#1a1a1a" }}>Demandez un devis gratuit</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
