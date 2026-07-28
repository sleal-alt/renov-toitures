"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { icon: "🏠", target: 195, label: "Toits Rénovés", suffix: "" },
  { icon: "👥", target: 212, label: "Clients Satisfaits", suffix: "" },
  { icon: "👷", target: 3, label: "Artisans", suffix: "" },
  { icon: "🕐", target: 22, label: "Ans D'Expérience", suffix: "" },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 30);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function CounterSection() {
  return (
    <section style={{ background: "#1a1a1a", padding: "48px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, textAlign: "center" }}>
        {STATS.map(({ icon, target, label, suffix }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center" }}>
            <div style={{ fontSize: 40, opacity: 0.7 }}>{icon}</div>
            <div>
              <div style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#F5A524" }}>
                <Counter target={target} suffix={suffix} />
              </div>
              <div style={{ color: "#aaa", fontSize: 13, marginTop: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
