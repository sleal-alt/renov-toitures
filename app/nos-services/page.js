import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Nos Services — Rénover ma Toiture Haute-Savoie",
  description: "Rénovation toiture, charpente, façade, zinguerie, démoussage, isolation, vélux en Haute-Savoie. Devis gratuit. Tél : 06 03 53 84 00",
};

const SERVICES = [
  {
    title: "Rénovation Toits",
    desc: "Charpente traditionnelle en bois : abris de voiture, abris de jardin, charpente de maison. Couverture tuile ou bac-acier. Pose d'ornements de toiture.",
    img: "/images/IMG-20220314-WA0028-e1648554647410.jpg",
    items: ["Charpente traditionnelle en bois", "Abris de voiture & abris de jardin", "Couverture tuile ou bac-acier", "Pose d'ornements de toiture"],
  },
  {
    title: "Rénovation de façade",
    desc: "Enduits à la chaux, peinture extérieure, revêtement extérieur et sablage de chalet.",
    img: "/images/IMG-20220315-WA0005.jpg",
    items: ["Enduits à la chaux", "Peinture extérieure", "Revêtement extérieur", "Sablage de chalet"],
  },
  {
    title: "Zinguerie",
    desc: "Changement des chéneaux, tuyaux de descente, garniture de cheminée et habillage planche de rive.",
    img: "/images/IMG-20220314-WA0034-e1648554604726.jpg",
    items: ["Changement des chéneaux", "Tuyaux de descente", "Garniture de cheminée", "Habillage planche de rive"],
  },
  {
    title: "Pose Vélux",
    desc: "Création ou changement de fenêtre de toit type Velux.",
    img: "/images/IMG_0187.jpg",
    items: ["Création de fenêtre de toit", "Remplacement de Velux", "Étanchéité garantie"],
  },
  {
    title: "Traitement et protection",
    desc: "Traitement préventif et curatif, revêtement hydrofuge, traitement fongicide.",
    img: "/images/IMG-20220314-WA0030-e1648554661194.jpg",
    items: ["Traitement préventif et curatif", "Revêtement hydrofuge", "Traitement fongicide"],
  },
  {
    title: "Isolation",
    desc: "Isolation extérieure, isolation des combles et isolation de toiture.",
    img: "/images/IMG-20220314-WA0035-e1648554629182.jpg",
    items: ["Isolation extérieure", "Isolation des combles", "Isolation de toiture"],
  },
  {
    title: "Démoussage toiture",
    desc: "Nettoyage et démoussage de toiture professionnel en Haute-Savoie.",
    img: "/images/IMG-20220314-WA0036-e1648554966260.jpg",
    items: ["Démoussage haute pression", "Traitement anti-mousse", "Inspection toiture offerte"],
    href: "/demoussage-toiture",
  },
];

export default function NosServices() {
  return (
    <>
      <section style={{ background: "#F5A524", padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ color: "white", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: 0 }}>Nos Services</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", marginTop: 8 }}>
          <Link href="/" style={{ color: "white" }}>Accueil</Link> &rsaquo; Nos Services
        </p>
      </section>

      <section style={{ padding: "64px 20px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          {SERVICES.map(({ title, desc, img, items, href }) => (
            <div key={title} style={{ background: "white", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}>
              <div style={{ position: "relative", height: 220 }}>
                <Image src={img} alt={title} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: 28 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: "#1a1a1a" }}>{title}</h2>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{desc}</p>
                <ul style={{ paddingLeft: 20, margin: "0 0 20px", color: "#555", fontSize: 14, lineHeight: 2 }}>
                  {items.map(item => <li key={item}>{item}</li>)}
                </ul>
                <Link href={href || "/contact"} style={{ background: "#F5A524", color: "white", padding: "10px 22px", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
                  Demander un devis
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#F5A524", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ color: "white", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, marginBottom: 20 }}>
          Un projet ? Contactez-nous pour un devis gratuit
        </h2>
        <a href="tel:0603538400" style={{ background: "white", color: "#F5A524", padding: "14px 36px", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: 18, display: "inline-block" }}>
          📞 06 03 53 84 00
        </a>
      </section>
    </>
  );
}
