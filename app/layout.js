import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Rénover ma toiture - L'artisan de votre région à Bonne en Haute-Savoie",
  description: "Artisan couvreur à Bonne (74). Rénovation toiture, charpente, façade, démoussage, zinguerie, isolation. Devis gratuit. Tél : 06 03 53 84 00",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "Arial, Helvetica, sans-serif" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
