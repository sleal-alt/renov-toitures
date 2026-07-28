"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 150, label: "Toits rénovés", suffix: "+" },
  { target: 200, label: "Clients satisfaits", suffix: "+" },
  { target: 3, label: "Artisans", suffix: "" },
  { target: 20, label: "ans d'expérience", suffix: "" },
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
        {STATS.map(({ target, label, suffix }) => (
          <div key={label}>
            <div style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 900, color: "#F5A524" }}>
              <Counter target={target} suffix={suffix} />
            </div>
            <div style={{ color: "#aaa", fontSize: 15, marginTop: 8 }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
