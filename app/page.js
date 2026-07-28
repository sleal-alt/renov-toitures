import Image from "next/image";
import Link from "next/link";
import CounterSection from "@/components/CounterSection";
import ServiceCard from "@/components/ServiceCard";
import FournisseursCarousel from "@/components/FournisseursCarousel";
import AvisClients from "@/components/AvisClients";
import AtoutCard from "@/components/AtoutCard";

const SERVICES = [
  {
    title: "Rénovation Toits",
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect width="52" height="52" rx="4" fill="#FF9800" opacity="0.12"/><path d="M10 28L26 12L42 28" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="18" y="28" width="16" height="14" stroke="#FF9800" strokeWidth="2.5" strokeLinejoin="round"/></svg>,
    items: ["Charpente traditionnelle en bois : abris de voiture, abris de jardin, charpente de maison", "Couverture tuile ou bac-acier", "Pose d'ornements de toiture"],
    images: ["/images/8-027-scaled.jpg", "/images/IMG-20220314-WA0028-e1648554647410.jpg"],
  },
  {
    title: "Rénovation de Façade",
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect width="52" height="52" rx="4" fill="#FF9800" opacity="0.12"/><rect x="10" y="14" width="32" height="24" rx="2" stroke="#FF9800" strokeWidth="2.5"/><path d="M10 22h32M26 22v16" stroke="#FF9800" strokeWidth="2.5"/></svg>,
    items: ["Enduits à la chaux", "Peinture extérieure", "Revêtement extérieur", "Sablage de chalet"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Zinguerie",
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect width="52" height="52" rx="4" fill="#FF9800" opacity="0.12"/><path d="M10 20h32v4H10zM10 28h32v4H10z" stroke="#FF9800" strokeWidth="2.5" strokeLinejoin="round"/><path d="M16 20v16M26 20v16M36 20v16" stroke="#FF9800" strokeWidth="2"/></svg>,
    items: ["Changement des chéneaux", "Tuyaux de descente, garniture de cheminée", "Habillage planche de rive"],
    images: ["/images/8-100-scaled.jpg", "/images/IMG-20220314-WA0034-e1648554604726.jpg"],
  },
  {
    title: "Pose Vélux",
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect width="52" height="52" rx="4" fill="#FF9800" opacity="0.12"/><rect x="14" y="14" width="24" height="24" rx="2" stroke="#FF9800" strokeWidth="2.5"/><path d="M14 26h24M26 14v24" stroke="#FF9800" strokeWidth="2"/></svg>,
    items: ["Création ou changement de fenêtre de toit type Velux"],
    images: ["/images/IMG_0188.jpg", "/images/IMG_0187.jpg"],
  },
  {
    title: "Traitement et Protection",
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect width="52" height="52" rx="4" fill="#FF9800" opacity="0.12"/><path d="M26 10c0 0-14 7-14 18a14 14 0 0028 0C40 17 26 10 26 10z" stroke="#FF9800" strokeWidth="2.5" strokeLinejoin="round"/><path d="M20 28c0 4 2.7 6 6 6" stroke="#FF9800" strokeWidth="2" strokeLinecap="round"/></svg>,
    items: ["Préventif et curatif", "Revêtement hydrofuge", "Traitement fongicide"],
    images: ["/images/IMG-20220314-WA0039-e1648554999215.jpg", "/images/IMG-20220314-WA0030-e1648554661194.jpg"],
  },
  {
    title: "Isolation",
    icon: <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><rect width="52" height="52" rx="4" fill="#FF9800" opacity="0.12"/><path d="M26 10L26 10" stroke="#FF9800" strokeWidth="2" strokeLinecap="round"/><path d="M26 8v4M18.5 10.5l2.8 2.8M13 18h4M10.5 26H8M13 34l2.8-2.8M26 36v4M33.2 33.2L36 36M38 26h4M38 18l-2.8 2.8M33.2 13.3L36 10.5" stroke="#FF9800" strokeWidth="2" strokeLinecap="round"/><circle cx="26" cy="26" r="8" stroke="#FF9800" strokeWidth="2.5"/></svg>,
    items: ["Isolation extérieure", "Isolation des combles", "Isolation de toiture"],
    images: ["/images/IMG-20220314-WA0035-e1648554629182.jpg"],
  },
];

const VALEURS = [
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FF9800"/><path d="M12 24c0-2.2 3.6-4 8-4s8 1.8 8 4" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="20" cy="15" r="4" stroke="white" strokeWidth="2"/><circle cx="12" cy="16" r="3" stroke="white" strokeWidth="1.5"/><circle cx="28" cy="16" r="3" stroke="white" strokeWidth="1.5"/><path d="M9 23c0-1.7 1.3-3 3-3M28 23c1.7 0 3 1.3 3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: "Artisan Expert",
    desc: "Nous mettons nos 20 ans d'expérience à votre disposition.",
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FF9800"/><circle cx="20" cy="18" r="5" stroke="white" strokeWidth="2"/><path d="M15 28c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M25 14l2-2M28 18h2M25 22l2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: "Facilités de Paiement",
    desc: "Nous vous proposons des paiements en plusieurs fois.",
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FF9800"/><path d="M12 20l6 6 10-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Devis Gratuits",
    desc: "Obtenez un devis adapté et gratuit pour votre projet.",
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FF9800"/><rect x="13" y="12" width="14" height="18" rx="2" stroke="white" strokeWidth="2"/><path d="M17 17h6M17 21h4M25 26l4 2-1-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: "Rénovation Sur-Mesure",
    desc: "Laissez-nous vous conseiller pour votre projet afin d'utiliser la meilleure solution pour votre besoin.",
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FF9800"/><path d="M14 22c2 2 8 4 12 0" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M12 28c2 2 5 3 8 3s6-1 8-3" stroke="white" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="3" stroke="white" strokeWidth="1.5"/><circle cx="24" cy="16" r="3" stroke="white" strokeWidth="1.5"/></svg>,
    title: "Suivi Personnalisé",
    desc: "Nous restons disponibles après et pendant les travaux pour vous offrir un suivi de qualité.",
  },
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#FF9800"/><rect x="10" y="20" width="20" height="10" rx="2" stroke="white" strokeWidth="2"/><circle cx="14" cy="30" r="2.5" fill="white"/><circle cx="26" cy="30" r="2.5" fill="white"/><path d="M16 20v-4a4 4 0 018 0v4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: "Déplacements Gratuits",
    desc: "Nous nous déplaçons dans toute la Haute-Savoie gratuitement pour évaluer vos travaux.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: 520, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <iframe
            src="https://www.youtube.com/embed/SI7Rojim7N8?autoplay=1&mute=1&loop=1&playlist=SI7Rojim7N8&controls=0&showinfo=0&rel=0&disablekb=1&playsinline=1&iv_load_policy=3"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "177.78vh",
              height: "100vh",
              minWidth: "100%",
              minHeight: "56.25vw",
              transform: "translate(-50%, -50%)",
              border: "none",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "80px 20px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
          <div style={{ flex: "0 0 auto", maxWidth: 640 }}>
            <h1 style={{ color: "white", fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 900, marginBottom: 16, lineHeight: 1.1, textTransform: "uppercase" }}>
              Rénover Ma Toiture
            </h1>
            <p style={{ color: "white", fontSize: "clamp(0.95rem,2vw,1.15rem)", marginBottom: 32, lineHeight: 1.6, textTransform: "uppercase", fontWeight: 600, maxWidth: 520 }}>
              L'artisan de votre région spécialiste en rénovation de toiture et façades à Bonne.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact" style={{ background: "white", color: "#1a1a1a", padding: "13px 28px", fontWeight: 700, textDecoration: "none", fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>
                Rendez-vous
              </Link>
              <Link href="/nos-services" style={{ border: "2px solid white", color: "white", padding: "11px 26px", fontWeight: 700, textDecoration: "none", fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>
                Nos Services
              </Link>
            </div>
          </div>
          <div style={{ flex: "0 0 auto" }} className="hero-logo">
            <Image src="/images/logo-blanc.png" alt="Renov Toitures" width={260} height={200} style={{ objectFit: "contain" }} />
          </div>
        </div>
      </section>

      {/* ── 3 ATOUTS flip cards ── */}
      <section style={{ background: "#f5f5f5", padding: "0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid #eee" }}>
          <AtoutCard
            icon={
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="25" fill="#FF9800"/>
                {/* Screwdriver + Wrench crossed */}
                <g transform="translate(25,25)">
                  {/* Wrench */}
                  <g transform="rotate(-45)">
                    <rect x="-3" y="-12" width="6" height="16" rx="2" fill="white"/>
                    <rect x="-6" y="-14" width="12" height="5" rx="2.5" fill="white"/>
                    <rect x="-4" y="4" width="8" height="6" rx="1" fill="white"/>
                    <polygon points="-4,10 4,10 5,14 -5,14" fill="white"/>
                  </g>
                  {/* Screwdriver */}
                  <g transform="rotate(135)">
                    <rect x="-2" y="-13" width="4" height="18" rx="1" fill="white"/>
                    <rect x="-4" y="-15" width="8" height="4" rx="1" fill="white"/>
                    <polygon points="-2,5 2,5 3,14 -3,14" fill="white"/>
                  </g>
                </g>
              </svg>
            }
            title="20 Ans D'Expérience"
            desc="Ayant connu les évolutions des techniques de rénovation, nous mettons nos nombreuses années d'expérience à votre service."
          />
          <AtoutCard
            icon={
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="25" fill="#FF9800"/>
                {/* Pencil + Ruler crossed */}
                <g transform="translate(25,25)">
                  {/* Pencil diagonal */}
                  <g transform="rotate(-45)">
                    <rect x="-3" y="-13" width="6" height="20" rx="1.5" fill="white"/>
                    <polygon points="-3,7 3,7 0,13" fill="white"/>
                    <rect x="-3" y="-15" width="6" height="3" rx="1" fill="white"/>
                  </g>
                  {/* Ruler diagonal */}
                  <g transform="rotate(45)">
                    <rect x="-3" y="-14" width="6" height="28" rx="1.5" fill="white"/>
                    <rect x="-3" y="-11" width="4" height="1.5" fill="#FF9800"/>
                    <rect x="-3" y="-6" width="4" height="1.5" fill="#FF9800"/>
                    <rect x="-3" y="-1" width="4" height="1.5" fill="#FF9800"/>
                    <rect x="-3" y="4" width="4" height="1.5" fill="#FF9800"/>
                    <rect x="-3" y="9" width="4" height="1.5" fill="#FF9800"/>
                  </g>
                </g>
              </svg>
            }
            title="Devis Gratuits"
            desc="N'hésitez plus, demandez une estimation et un devis gratuitement afin de chiffrer votre projet avec précision."
          />
          <AtoutCard
            icon={
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="25" fill="#FF9800"/>
                {/* House with person */}
                <path d="M25 12L13 22v16h8v-9h8v9h8V22L25 12z" fill="white"/>
                <circle cx="25" cy="20" r="3.5" fill="#FF9800"/>
                <path d="M19 38c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="#FF9800"/>
              </svg>
            }
            title="Artisans Locaux"
            desc="Implantés depuis plus de 3 ans en Haute-Savoie, nous vous offrons une proximité indéfectible."
          />
        </div>
      </section>

      {/* ── NOTRE ENTREPRISE ── */}
      <section style={{ padding: "64px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 900, marginBottom: 20, color: "#1a1a1a", textTransform: "uppercase" }}>
            Notre Entreprise
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: "#555", marginBottom: 32, maxWidth: 600 }}>
            Basée depuis plus de 20 ans au pied de la Vallée Verte et du bassin genevois, l'entreprise Rénover ma toiture accompagne les particuliers et entreprises d'Haute-Savoie dans vos projets de toitures et de rénovations générales.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { icon: <svg width="50" height="50" viewBox="0 0 50 50" fill="none"><circle cx="25" cy="25" r="25" fill="#FF9800"/><circle cx="25" cy="25" r="10" stroke="white" strokeWidth="2.5"/><path d="M25 19v6l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>, title: "Réactivité", desc: "Nous vous rappelons dès que possible pour répondre à toutes vos interrogations." },
              { icon: <svg width="50" height="50" viewBox="0 0 50 50" fill="none"><circle cx="25" cy="25" r="25" fill="#FF9800"/><path d="M17 25c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/><circle cx="25" cy="25" r="3" fill="white"/></svg>, title: "Savoir-Faire", desc: "Travailler avec Rénover ma toiture, c'est s'assurer de confier votre projet à un artisan qualifié." },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0 }}>{icon}</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 4, color: "#1a1a1a" }}>{title}</p>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPTEURS ── */}
      <CounterSection />

      {/* ── NOS SERVICES ── */}
      <section style={{ padding: "64px 20px", background: "#f5f5f5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, marginBottom: 48, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: 1 }}>
            Nos Services
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {SERVICES.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── NOS VALEURS ── */}
      <section style={{ padding: "64px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, marginBottom: 48, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: 1 }}>
            Nos Valeurs
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 36 }}>
            {VALEURS.map(({ icon, title, desc }) => (
              <div key={title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0 }}>{icon}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, textTransform: "uppercase", color: "#1a1a1a", marginBottom: 8, letterSpacing: 0.5 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOS FOURNISSEURS ── */}
      <section style={{ padding: "48px 20px", background: "#fff", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, marginBottom: 40, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: 1 }}>
            Nos Fournisseurs
          </h2>
          <FournisseursCarousel />
        </div>
      </section>

      {/* ── CTA ORANGE + VIDEO ── */}
      <section style={{ background: "#FF9800", padding: "48px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 320px" }}>
            <h2 style={{ color: "white", fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 900, marginBottom: 24, lineHeight: 1.3, textTransform: "uppercase" }}>
              Offrez à votre toit la protection qu'il vous apporte.
            </h2>
            <a href="tel:0603538400" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "2px solid white", color: "white", padding: "12px 24px", fontWeight: 700, textDecoration: "none", fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>
              📞 Appelez-nous
            </a>
          </div>
          <div style={{ flex: "0 0 auto", width: 440, maxWidth: "100%" }}>
            <iframe
              src="https://www.youtube.com/embed/dW3oFGOkHkQ"
              title="Rénover ma toiture - Votre artisan à Bonne"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: 250, border: "none", borderRadius: 4 }}
            />
          </div>
        </div>
      </section>

      {/* ── NOS PROJETS ── */}
      <section style={{ padding: "64px 20px", background: "#f5f5f5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, marginBottom: 40, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: 1 }}>
            Nos Projets By Rénover Ma Toiture
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              "IMG-20220314-WA0028-e1648554647410.jpg",
              "IMG-20220314-WA0030-e1648554661194.jpg",
              "IMG-20220314-WA0034-e1648554604726.jpg",
              "IMG-20220314-WA0035-e1648554629182.jpg",
              "IMG-20220315-WA0005.jpg",
              "IMG_0187.jpg",
              "IMG_0188.jpg",
              "IMG-20200128-WA0018.jpg",
            ].map(img => (
              <div key={img} style={{ position: "relative", height: 200, overflow: "hidden" }}>
                <Image src={`/images/${img}`} alt="Réalisation toiture" fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/galerie" style={{ background: "#1a1a1a", color: "white", padding: "12px 32px", fontWeight: 700, textDecoration: "none", fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>
              Voir toute la galerie
            </Link>
          </div>
        </div>
      </section>

      {/* ── AVIS CLIENTS ── */}
      <AvisClients />

      <style>{`
        @media (max-width: 768px) {
          .hero-logo { display: none; }
        }
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
