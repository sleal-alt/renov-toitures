import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Notre Entreprise — Rénover ma Toiture Haute-Savoie",
  description: "Artisan couvreur depuis plus de 20 ans à Bonne (74). Spécialiste toiture et façade en Haute-Savoie. Découvrez notre entreprise.",
};

export default function Entreprise() {
  return (
    <>
      {/* Bandeau */}
      <section style={{ background: "#FF9800", padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ color: "white", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: 0 }}>Notre Entreprise</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", marginTop: 8 }}>
          <Link href="/" style={{ color: "white" }}>Accueil</Link> &rsaquo; Entreprise
        </p>
      </section>

      <section style={{ padding: "64px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: 20, color: "#1a1a1a" }}>
              Artisan couvreur depuis plus de 20 ans en Haute-Savoie
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "#555", marginBottom: 16 }}>
              Basée depuis plus de 20 ans au pied de la Vallée Verte et du bassin genevois, l'entreprise Rénover ma toiture accompagne les particuliers et entreprises d'Haute-Savoie dans leurs projets de toitures et de rénovations générales.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "#555", marginBottom: 16 }}>
              Implantés à Bonne (74380), nous intervenons dans tout le département de Haute-Savoie : Annemasse, Thonon, Cluses, Bonneville, Annecy, et leurs environs.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "#555", marginBottom: 32 }}>
              Nos équipes qualifiées maîtrisent toutes les techniques modernes de rénovation, de la charpente traditionnelle à l'isolation thermique, en passant par la zinguerie et le traitement de façades.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { icon: "🏆", label: "20 ans d'expérience" },
                { icon: "📋", label: "Devis gratuit" },
                { icon: "🚗", label: "Déplacement gratuit" },
                { icon: "💳", label: "Paiement facilité" },
                { icon: "✅", label: "Travail garanti" },
                { icon: "📞", label: "Suivi personnalisé" },
              ].map(({ icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, background: "#f9f9f9", padding: "12px 16px", borderRadius: 6 }}>
                  <span style={{ fontSize: 22 }}>{icon}</span>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{label}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36 }}>
              <Link href="/contact" style={{ background: "#FF9800", color: "white", padding: "14px 32px", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
                Demander un devis gratuit
              </Link>
            </div>
          </div>

          <div>
            <div style={{ borderRadius: 8, overflow: "hidden", marginBottom: 24 }}>
              <Image src="/images/chantier.jpeg" alt="Équipe Renov Toitures" width={600} height={400} style={{ width: "100%", height: "auto" }} />
            </div>
            <div style={{ background: "#FF9800", color: "white", padding: 28, borderRadius: 8 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Nos coordonnées</h3>
              <p style={{ lineHeight: 2.2, fontSize: 15 }}>
                📍 1119 Route des Alluaz, 74380 Bonne<br />
                📞 <a href="tel:0603538400" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>06 03 53 84 00</a><br />
                ✉️ <a href="mailto:reinhart.patrick@yahoo.fr" style={{ color: "white", textDecoration: "none" }}>reinhart.patrick@yahoo.fr</a><br />
                🕐 Lun–Ven : 8h00 – 18h00
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
