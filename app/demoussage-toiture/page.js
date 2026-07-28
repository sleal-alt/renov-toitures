import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Démoussage Toiture Annemasse — Rénover ma Toiture Haute-Savoie",
  description: "Démoussage et nettoyage de toiture à Annemasse et en Haute-Savoie. Artisan couvreur Renov Toitures Façades à Bonne (74). Tél : 06 03 53 84 00",
};

export default function DemoussageToiture() {
  return (
    <>
      <section style={{ background: "#FF9800", padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ color: "white", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: 0 }}>Démoussage toiture Annemasse</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", marginTop: 8 }}>
          Par Renov toitures façades Bonne, l'artisan de votre région
        </p>
        <p style={{ color: "rgba(255,255,255,0.85)", marginTop: 4 }}>
          <Link href="/" style={{ color: "white" }}>Accueil</Link> &rsaquo; Démoussage toiture
        </p>
      </section>

      {/* 3 atouts */}
      <section style={{ background: "#fff", padding: "40px 20px", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28 }}>
          {[
            { title: "20 ans d'expérience", desc: "Ayant connu les évolutions des techniques de rénovation, nous mettons nos nombreuses années d'expérience à votre service." },
            { title: "Devis gratuits", desc: "N'hésitez plus, demandez une estimation et un devis gratuitement afin de chiffrer votre projet avec précision." },
            { title: "Artisan local", desc: "Basés depuis plus de 3 ans en Haute-Savoie, nous vous offrons une proximité indéfectible." },
          ].map(({ title, desc }) => (
            <div key={title} style={{ textAlign: "center", padding: "20px 16px", borderRadius: 8, background: "#f9f9f9" }}>
              <h3 style={{ color: "#FF9800", fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contenu principal */}
      <section style={{ padding: "64px 20px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 700, marginBottom: 20, color: "#1a1a1a" }}>
              Renov toitures façades vous propose du démoussage toiture à Annemasse
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "#555", marginBottom: 16 }}>
              Nous sommes une entreprise proposant une large gamme de services d'entretien et de nombreuses autres prestations pour rendre votre vie plus confortable. Nos experts qualifiés règlent tous les dysfonctionnements et installent tous les équipements dans votre maison.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: "#555", marginBottom: 16 }}>
              Nos services de démoussage de toiture sont disponibles à Annemasse et dans toute la Haute-Savoie. Nous intervenons rapidement avec du matériel professionnel adapté à chaque type de couverture.
            </p>
            <div style={{ background: "#FF9800", color: "white", padding: 20, borderRadius: 8, marginBottom: 24 }}>
              <p style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>Appelez-nous :</p>
              <a href="tel:0603538400" style={{ color: "white", textDecoration: "none", fontSize: 24, fontWeight: 900 }}>06 03 53 84 00</a>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" style={{ background: "#FF9800", color: "white", padding: "12px 24px", borderRadius: 4, fontWeight: 700, textDecoration: "none" }}>
                Nous contacter
              </Link>
              <Link href="/contact" style={{ border: "2px solid #FF9800", color: "#FF9800", padding: "10px 22px", borderRadius: 4, fontWeight: 700, textDecoration: "none" }}>
                Demandez une estimation
              </Link>
            </div>
          </div>

          <div>
            <Image src="/images/IMG-20220314-WA0036-e1648554966260.jpg" alt="Démoussage toiture Annemasse" width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: 8 }} />
          </div>
        </div>
      </section>

      {/* Services démoussage */}
      <section style={{ padding: "48px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.7rem", fontWeight: 700, marginBottom: 40, color: "#1a1a1a" }}>Nos services de démoussage de toiture</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { title: "Couvreur Annemasse", desc: "Intervention rapide sur tout type de toiture. Équipe qualifiée et matériel professionnel.", img: "IMG-20220314-WA0028-e1648554647410" },
              { title: "Nettoyage toiture Annemasse", desc: "Nettoyage haute pression, démoussage complet et traitement préventif anti-mousse.", img: "IMG-20220314-WA0030-e1648554661194" },
              { title: "Ravalement de façade Annemasse", desc: "Nettoyage et ravalement de façades. Peinture extérieure et revêtements.", img: "IMG-20220315-WA0005" },
            ].map(({ title, desc, img }) => (
              <div key={title} style={{ background: "#f9f9f9", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ position: "relative", height: 200 }}>
                  <Image src={`/images/${img}.jpg`} alt={title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: "#1a1a1a" }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FF9800", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ color: "white", fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>
          Renov toitures façades à Bonne
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 24 }}>
          Nous proposons également un large panel de services pour vos toitures !
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:0603538400" style={{ background: "white", color: "#FF9800", padding: "14px 32px", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
            📞 06 03 53 84 00
          </a>
          <Link href="/nos-services" style={{ border: "2px solid white", color: "white", padding: "12px 30px", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
            Tous nos services
          </Link>
        </div>
      </section>
    </>
  );
}
