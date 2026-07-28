import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Galerie — Nos Réalisations Rénover ma Toiture Haute-Savoie",
  description: "Galerie photos de nos réalisations en toiture et façade en Haute-Savoie. Artisan couvreur à Bonne (74).",
};

const PHOTOS = [
  { file: "IMG-20220314-WA0028-e1648554647410.jpg" },
  { file: "IMG-20220314-WA0030-e1648554661194.jpg" },
  { file: "IMG-20220314-WA0034-e1648554604726.jpg" },
  { file: "IMG-20220314-WA0035-e1648554629182.jpg" },
  { file: "IMG-20220315-WA0005.jpg" },
  { file: "IMG_0187.jpg" },
  { file: "IMG_0188.jpg" },
  { file: "IMG-20200128-WA0018.jpg" },
  { file: "IMG_5587-scaled.jpg" },
  { file: "IMG-20220314-WA0012.jpg" },
  { file: "IMG-20220314-WA0013-e1648554936221.jpg" },
  { file: "IMG-20220314-WA0014.jpg" },
  { file: "IMG-20220314-WA0015.jpg" },
  { file: "IMG-20220314-WA0016.jpg" },
  { file: "IMG-20220314-WA0017-e1648554951233.jpg" },
  { file: "IMG-20220314-WA0018.jpg" },
  { file: "IMG-20220314-WA0019.jpg" },
  { file: "IMG-20220314-WA0020.jpg" },
  { file: "IMG-20220314-WA0021.jpg" },
  { file: "IMG-20220314-WA0022-e1648555213918.jpg" },
  { file: "IMG-20220314-WA0023.jpg" },
  { file: "IMG-20220314-WA0024.jpg" },
  { file: "IMG-20220314-WA0025.jpg" },
  { file: "IMG-20220314-WA0026-e1648555117665.jpg" },
  { file: "IMG-20220314-WA0027-e1648555193835.jpg" },
  { file: "IMG-20220314-WA0029.jpg" },
  { file: "IMG-20220314-WA0031.jpg" },
  { file: "IMG-20220314-WA0036-e1648554966260.jpg" },
  { file: "IMG-20220314-WA0037.jpg" },
  { file: "IMG-20220314-WA0038-e1648555016396.jpg" },
  { file: "IMG-20220314-WA0039-e1648554999215.jpg" },
  { file: "IMG-20220314-WA0040-e1648554983363.jpg" },
  { file: "IMG-20220314-WA0041-e1648554916828.jpg" },
  { file: "IMG-20220314-WA0042.jpg" },
  { file: "IMG-20220314-WA0043.jpg" },
  { file: "IMG_0186-e1648555041176.jpg" },
  { file: "IMG_0189.jpg" },
  { file: "IMG_0190-e1648554749502.jpg" },
  { file: "IMG_0191.jpg" },
  { file: "IMG_0192-e1648555304868.jpg" },
  { file: "IMG_5007-scaled.jpg" },
  { file: "IMG_5543-scaled-e1648555170115.jpg" },
  { file: "IMG_5793-scaled-e1648555146238.jpg" },
  { file: "IMG_5795-scaled.jpg" },
  { file: "8-027-scaled.jpg" },
  { file: "8-100-scaled.jpg" },
  { file: "8-101-scaled-e1648555064498.jpg" },
  { file: "8-102-scaled-e1648555079330.jpg" },
  { file: "8-104-scaled-e1648555104428.jpg" },
  { file: "8-125-scaled.jpg" },
  { file: "8-127-scaled.jpg" },
  { file: "8-005-scaled-e1648554876887.jpg" },
  { file: "8-008-scaled-e1648554892351.jpg" },
  { file: "8-032.jpg" },
  { file: "FE4935A8-5D5D-407B-98A3-50B15E4F11C8-scaled.jpeg" },
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
            {PHOTOS.map(({ file }) => (
              <div key={file} style={{ position: "relative", height: 240, borderRadius: 6, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                <Image
                  src={`/images/${file}`}
                  alt="Réalisation toiture Haute-Savoie"
                  fill
                  style={{ objectFit: "cover" }}
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
