import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Galerie — Nos Réalisations Rénover ma Toiture Haute-Savoie",
  description: "Galerie photos de nos réalisations en toiture et façade en Haute-Savoie. Artisan couvreur à Bonne (74).",
};

const PHOTOS = [
  "IMG-20220314-WA0028-e1648554647410",
  "IMG-20220314-WA0030-e1648554661194",
  "IMG-20220314-WA0034-e1648554604726",
  "IMG-20220314-WA0035-e1648554629182",
  "IMG-20220315-WA0005",
  "IMG_0187",
  "IMG_0188",
  "IMG-20200128-WA0018",
  "IMG_5587-scaled",
  "IMG-20220314-WA0012",
  "IMG-20220314-WA0013-e1648554936221",
  "IMG-20220314-WA0016",
  "IMG-20220314-WA0017-e1648554951233",
  "IMG-20220314-WA0019",
  "IMG-20220314-WA0021",
  "IMG-20220314-WA0022-e1648555213918",
  "IMG-20220314-WA0026-e1648555117665",
  "IMG-20220314-WA0036-e1648554966260",
  "IMG-20220314-WA0038-e1648555016396",
  "IMG-20220314-WA0041-e1648554916828",
];

export default function Galerie() {
  return (
    <>
      <section style={{ background: "#F5A524", padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ color: "white", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: 0 }}>Galerie</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", marginTop: 8 }}>
          <Link href="/" style={{ color: "white" }}>Accueil</Link> &rsaquo; Galerie
        </p>
      </section>

      <section style={{ padding: "64px 20px", background: "#f9f9f9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 40, fontSize: 16 }}>
            Découvrez nos réalisations en toiture, façade, zinguerie et isolation en Haute-Savoie.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {PHOTOS.map(photo => (
              <div key={photo} style={{ position: "relative", height: 240, borderRadius: 6, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                <Image
                  src={`/images/${photo}.jpg`}
                  alt="Réalisation toiture Haute-Savoie"
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.3s" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#F5A524", padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ color: "white", fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>
          Votre projet mérite le meilleur artisan
        </h2>
        <Link href="/contact" style={{ background: "white", color: "#F5A524", padding: "12px 32px", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
          Demander un devis gratuit
        </Link>
      </section>
    </>
  );
}
