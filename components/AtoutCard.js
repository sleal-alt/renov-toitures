"use client";

export default function AtoutCard({ icon, title, desc }) {
  return (
    <div className="atout-wrap">
      {/* Front */}
      <div className="atout-front">
        <div className="atout-icon">{icon}</div>
        <h3 className="atout-title">{title}</h3>
        <p className="atout-desc">{desc}</p>
      </div>
      {/* Back */}
      <div className="atout-back">
        <div className="atout-icon">{icon}</div>
        <h3 className="atout-title">{title}</h3>
        <p className="atout-desc">{desc}</p>
      </div>

      <style jsx>{`
        .atout-wrap {
          position: relative;
          height: 310px;
          overflow: hidden;
          background: white;
          cursor: default;
        }

        /* Front : visible par défaut */
        .atout-front {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 28px;
          text-align: center;
          background: white;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.5s ease;
          transform: translateY(0);
          opacity: 1;
          z-index: 1;
        }

        /* Back : cachée en bas */
        .atout-back {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 28px;
          text-align: center;
          background: #F5A524;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.5s ease;
          transform: translateY(100%);
          opacity: 0;
          z-index: 2;
        }

        /* Hover : front tombe, back remonte */
        .atout-wrap:hover .atout-front {
          transform: translateY(-30%);
          opacity: 0;
        }
        .atout-wrap:hover .atout-back {
          transform: translateY(0);
          opacity: 1;
        }

        .atout-icon {
          margin-bottom: 16px;
          display: flex;
          justify-content: center;
        }
        .atout-title {
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0 0 12px;
          color: #1a1a1a;
        }
        .atout-back .atout-title {
          color: white;
        }
        .atout-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #666;
          margin: 0;
        }
        .atout-back .atout-desc {
          color: rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </div>
  );
}
