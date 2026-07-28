const AVIS = [
  { nom: "Rabih Sarieddine", date: "2024-05-11", initial: "R", color: "#7B7B7B", texte: "Excellent travail pour l'entretien de ma toiture. Cranves Sales" },
  { nom: "Emmanuèle Tavera v...", date: "2024-04-18", initial: "E", color: "#4CAF50", texte: "Très bon travail, dans les délais, père et fils archi sympathiques, le toit est magnifique et pour longtemps !" },
  { nom: "Marie Rambaud", date: "2024-04-18", initial: "M", color: "#4CAF50", texte: "Nous avons fait appel à l'entreprise renov toiture facade pour des travaux de rénovation de notre toit et nous sommes très satisfaits.", lire: true },
  { nom: "Marie Jp", date: "2024-02-17", initial: "M", color: "#E91E63", texte: "Travail impeccable et rapide, nous sommes très satisfaits et recommandons cette entreprise." },
  { nom: "Joelle Grenier", date: "2023-11-27", initial: "J", color: "#4CAF50", texte: "Artisan très professionnel, travaillant en famille. Les délais sont respectés bien que la météo pour refection du toit soit à la pluie.", lire: true },
  { nom: "Olivier Stücklin", date: "2023-11-12", initial: "O", color: "#F57C00", texte: "Merci beaucoup à Mr Reinhart pour le nettoyage et protection antimousse/hydrofuge très bien exécuté et surtout pour l'extraordinaire réactivité.", lire: true },
  { nom: "O L", date: "2023-11-07", initial: "O", color: "#039BE5", texte: "Merci Renov Toiture Façade ! Suite à des dégâts liés à un très fort coup de vent, Mr Reinhart est passé très rapidement pour le changement.", lire: true },
  { nom: "Didier Cholin", date: "2023-10-06", initial: "D", color: "#9C27B0", texte: "Des vrais professionnels, mon toit à retrouvé une nouvelle jeunesse, Bravo et merci" },
  { nom: "Paige Holt", date: "2023-10-02", initial: "P", color: "#4CAF50", texte: "M. Reinhart est venu à plusieurs reprises pour faire des travaux chez moi. Il a toujours été responsif, professionnel et agréable.", lire: true },
  { nom: "regine verdier", date: "2023-09-11", initial: "R", color: "#795548", texte: "Monsieur Reinhart a réalisé des travaux de rénovation de peinture d'une grande toiture en tôle canadienne dans des délais très courts.", lire: true },
];

function Stars() {
  return <span style={{ color: "#F5A524", fontSize: 16 }}>★★★★★</span>;
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function AvisClients() {
  const cols = [[], [], [], []];
  AVIS.forEach((a, i) => cols[i % 4].push(a));

  return (
    <section style={{ padding: "64px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, marginBottom: 40, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: 1 }}>
          Avis Clients
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {cols.map((col, ci) => (
            <div key={ci} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {col.map(({ nom, date, initial, color, texte, lire }) => (
                <div key={nom + date} style={{ border: "1px solid #e0e0e0", borderRadius: 8, padding: 16, background: "white" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <div style={{ width: 38, height: 38, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 16, flexShrink: 0 }}>
                        {initial}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a" }}>{nom}</div>
                        <div style={{ fontSize: 12, color: "#999" }}>{date}</div>
                      </div>
                    </div>
                    <GoogleIcon />
                  </div>
                  <Stars />
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, marginTop: 8 }}>{texte}</p>
                  {lire && <span style={{ fontSize: 12, color: "#888", cursor: "pointer" }}>Lire la suite</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .avis-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 560px) {
          .avis-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
