import Link from "next/link";

export const metadata = {
  title: "Mentions légales — Rénover ma Toiture",
};

export default function Legal() {
  return (
    <>
      <section style={{ background: "#FF9800", padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ color: "white", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, margin: 0 }}>Mentions légales</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", marginTop: 8 }}>
          <Link href="/" style={{ color: "white" }}>Accueil</Link> &rsaquo; Mentions légales
        </p>
      </section>

      <section style={{ padding: "64px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", lineHeight: 1.9, color: "#444", fontSize: 15 }}>
          <p style={{ marginBottom: 32, color: "#666" }}>
            Pour toutes demandes veuillez vous référer à la rubrique <Link href="/contact" style={{ color: "#FF9800" }}>Contact</Link>.
          </p>

          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1a1a1a", marginBottom: 16 }}>CGU — Conditions générales d'utilisation</h2>
          <p style={{ marginBottom: 12 }}>En vigueur au 16/03/2022</p>

          <h3 style={{ fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#1a1a1a" }}>Article 1 : Les mentions légales</h3>
          <p style={{ marginBottom: 16 }}>
            L'édition et la direction de la publication du site <strong>https://renover-ma-toiture.fr</strong> est assurée par <strong>Renov Toitures Façades</strong>, domiciliée au 1119 Route des Alluaz, 74380 Bonne. Téléphone : 06 03 53 84 00. Email : reinhart.patrick@yahoo.fr.
          </p>

          <h3 style={{ fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#1a1a1a" }}>Article 2 : Accès au site</h3>
          <p style={{ marginBottom: 16 }}>
            Le site https://renover-ma-toiture.fr permet à l'Utilisateur un accès gratuit aux services suivants : Site vitrine pour consulter les services et prestations de l'entreprise Renov Toiture Façade. Avec une option de prise de contact. Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet.
          </p>

          <h3 style={{ fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#1a1a1a" }}>Article 3 : Collecte des données</h3>
          <p style={{ marginBottom: 16 }}>
            Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les Utilisateurs.
          </p>

          <h3 style={{ fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#1a1a1a" }}>Article 4 : Propriété intellectuelle</h3>
          <p style={{ marginBottom: 16 }}>
            Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur. L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus.
          </p>

          <h3 style={{ fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#1a1a1a" }}>Article 5 : Responsabilité</h3>
          <p style={{ marginBottom: 16 }}>
            Les sources des informations diffusées sur le site sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions. Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle.
          </p>

          <h3 style={{ fontWeight: 700, marginTop: 28, marginBottom: 10, color: "#1a1a1a" }}>Article 6 : Hébergement</h3>
          <p style={{ marginBottom: 16 }}>
            Le site est hébergé par <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 900, San Francisco, CA 94104, États-Unis.
          </p>
        </div>
      </section>
    </>
  );
}
