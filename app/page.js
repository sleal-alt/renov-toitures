import Image from "next/image";
import Link from "next/link";
import CounterSection from "@/components/CounterSection";

const SERVICES = [
  {
    title: "Rénovation Toits",
    items: ["Charpente traditionnelle en bois : abris de voiture, abris de jardin, charpente de maison", "Couverture tuile ou bac-acier", "Pose d'ornements de toiture"],
    img: "/images/IMG-20220314-WA0028-e1648554647410.jpg",
  },
  {
    title: "Rénovation de façade",
    items: ["Enduits à la chaux", "Peinture extérieure", "Revêtement extérieur", "Sablage de chalet"],
    img: "/images/IMG-20220315-WA0005.jpg",
  },
  {
    title: "Zinguerie",
    items: ["Changement des chéneaux", "Tuyaux de descente, garniture de cheminée", "Habillage planche de rive"],
    img: "/images/IMG-20220314-WA0034-e1648554604726.jpg",
  },
  {
    title: "Pose Vélux",
    items: ["Création ou changement de fenêtre de toit type Velux"],
    img: "/images/IMG_0187.jpg",
  },
  {
    title: "Traitement et protection",
    items: ["Préventif et curatif", "Revêtement hydrofuge", "Traitement fongicide"],
    img: "/images/IMG-20220314-WA0030-e1648554661194.jpg",
  },
  {
    title: "Isolation",
    items: ["Isolation extérieure", "Isolation des combles", "Isolation de toiture"],
    img: "/images/IMG-20220314-WA0035-e1648554629182.jpg",
  },
];

const VALEURS = [
  { icon: "🏆", title: "Artisan expert", desc: "Nous mettons nos 20 ans d'expérience à votre disposition." },
  { icon: "💳", title: "Facilités de paiement", desc: "Nous vous proposons des paiements en plusieurs fois." },
  { icon: "📋", title: "Devis gratuits", desc: "Obtenez un devis adapté et gratuit pour votre projet." },
  { icon: "🔧", title: "Rénovation sur-mesure", desc: "Laissez-nous vous conseiller pour votre projet afin d'utiliser la meilleure solution pour votre besoin." },
  { icon: "📞", title: "Suivi personnalisé", desc: "Nous restons disponibles après et pendant les travaux pour vous offrir un suivi de qualité." },
  { icon: "🚗", title: "Déplacements gratuits", desc: "Nous nous déplaçons dans toute la Haute-Savoie gratuitement pour évaluer vos travaux." },
];

const FOURNISSEURS = [
  { name: "La Rivière", file: "lariviere.png" },
  { name: "Point P", file: "point-p.png" },
  { name: "Relius", file: "relius.png" },
  { name: "Sikkens", file: "sikkens-vector-logo.png" },
  { name: "Tollens", file: "01_boutique_logo_tollens.png" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: 520, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/hero.jpg" alt="Toiture Haute-Savoie" fill style={{ objectFit: "cover" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 20px", textAlign: "center", width: "100%" }}>
          <h1 style={{ color: "white", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>
            Rénover ma toiture
          </h1>
          <p style={{ color: "white", fontSize: "clamp(1rem,2.5vw,1.4rem)", marginBottom: 8 }}>
            L'artisan de votre région spécialiste en rénovation de toiture et façades à Bonne.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/contact" style={{ background: "#F5A524", color: "white", padding: "14px 32px", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
              Rendez-vous
            </Link>
            <Link href="/nos-services" style={{ background: "white", color: "#333", padding: "14px 32px", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
              Nos Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 ATOUTS ── */}
      <section style={{ background: "#F5A524", padding: "40px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
          {[
            { title: "20 ans d'expérience", desc: "Ayant connu les évolutions des techniques de rénovation, nous mettons nos nombreuses années d'expérience à votre service." },
            { title: "Devis gratuits", desc: "N'hésitez plus, demandez une estimation et un devis gratuitement afin de chiffrer votre projet avec précision." },
            { title: "Artisan local", desc: "Basés depuis plus de 3 ans en Haute-Savoie, nous vous offrons une proximité indéfectible." },
          ].map(({ title, desc }) => (
            <div key={title} style={{ textAlign: "center", color: "white" }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NOTRE ENTREPRISE ── */}
      <section style={{ padding: "64px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, marginBottom: 16, color: "#1a1a1a" }}>Notre Entreprise</h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
              Basée depuis plus de 20 ans au pied de la Vallée Verte et du bassin genevois, l'entreprise Rénover ma toiture accompagne les particuliers et entreprises d'Haute-Savoie dans vos projets de toitures et de rénovations générales.
            </p>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 24 }}>
              <div style={{ borderLeft: "4px solid #F5A524", paddingLeft: 16 }}>
                <p style={{ fontWeight: 700, marginBottom: 4 }}>Réactivité</p>
                <p style={{ fontSize: 14, color: "#666" }}>Nous vous rappelons dès que possible pour répondre à toutes vos interrogations.</p>
              </div>
              <div style={{ borderLeft: "4px solid #F5A524", paddingLeft: 16 }}>
                <p style={{ fontWeight: 700, marginBottom: 4 }}>Savoir-Faire</p>
                <p style={{ fontSize: 14, color: "#666" }}>Travailler avec Rénover ma toiture, c'est s'assurer de confier votre projet à un artisan qualifié.</p>
              </div>
            </div>
            <Link href="/entreprise" style={{ display: "inline-block", marginTop: 28, background: "#F5A524", color: "white", padding: "12px 28px", borderRadius: 4, fontWeight: 700, textDecoration: "none" }}>
              En savoir plus
            </Link>
          </div>
          <div style={{ borderRadius: 8, overflow: "hidden" }}>
            <Image src="/images/chantier.jpeg" alt="Chantier Renov Toitures" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ── COMPTEURS ── */}
      <CounterSection />

      {/* ── NOS SERVICES ── */}
      <section style={{ padding: "64px 20px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, marginBottom: 48, color: "#1a1a1a" }}>Nos Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {SERVICES.map(({ title, items, img }) => (
              <div key={title} style={{ background: "white", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                <div style={{ position: "relative", height: 200 }}>
                  <Image src={img} alt={title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "#1a1a1a" }}>{title}</h3>
                  <ul style={{ paddingLeft: 18, margin: 0, color: "#555", fontSize: 14, lineHeight: 1.9 }}>
                    {items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/nos-services" style={{ background: "#F5A524", color: "white", padding: "14px 36px", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* ── NOS VALEURS ── */}
      <section style={{ padding: "64px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, marginBottom: 48, color: "#1a1a1a" }}>Nos Valeurs</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
            {VALEURS.map(({ icon, title, desc }) => (
              <div key={title} style={{ textAlign: "center", padding: "24px 16px" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: "#1a1a1a" }}>{title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ORANGE ── */}
      <section style={{ background: "#F5A524", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ color: "white", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, marginBottom: 8 }}>
          Offrez à votre toit la protection qu'il vous apporte.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 28, fontSize: 16 }}>Devis gratuit et sans engagement en 24h</p>
        <a href="tel:0603538400" style={{ background: "white", color: "#F5A524", padding: "14px 36px", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: 18 }}>
          📞 06 03 53 84 00
        </a>
      </section>

      {/* ── GALERIE APERÇU ── */}
      <section style={{ padding: "64px 20px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, marginBottom: 40, color: "#1a1a1a" }}>Nos Projets</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
            {[
              "IMG-20220314-WA0028-e1648554647410",
              "IMG-20220314-WA0030-e1648554661194",
              "IMG-20220314-WA0034-e1648554604726",
              "IMG-20220314-WA0035-e1648554629182",
              "IMG-20220315-WA0005",
              "IMG_0187",
              "IMG_0188",
              "IMG-20200128-WA0018",
            ].map(img => (
              <div key={img} style={{ position: "relative", height: 200, borderRadius: 6, overflow: "hidden" }}>
                <Image src={`/images/${img}.jpg`} alt="Réalisation toiture" fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/galerie" style={{ background: "#F5A524", color: "white", padding: "12px 32px", borderRadius: 4, fontWeight: 700, textDecoration: "none" }}>
              Voir toute la galerie
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOURNISSEURS ── */}
      <section style={{ padding: "48px 20px", background: "#fff", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 18, fontWeight: 700, marginBottom: 32, color: "#888", textTransform: "uppercase", letterSpacing: 2 }}>Nos Fournisseurs</h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
            {FOURNISSEURS.map(({ name, file }) => (
              <Image key={name} src={`/images/${file}`} alt={name} width={120} height={60} style={{ objectFit: "contain", filter: "grayscale(100%)", opacity: 0.6 }} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
