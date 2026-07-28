"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSent(true);
  };

  if (sent) return (
    <div style={{ background: "#d4edda", border: "1px solid #c3e6cb", color: "#155724", padding: 24, borderRadius: 8, textAlign: "center" }}>
      <p style={{ fontSize: 18, fontWeight: 700 }}>✅ Message envoyé !</p>
      <p>Nous vous recontacterons dans les plus brefs délais.</p>
    </div>
  );

  const field = { width: "100%", padding: "12px 14px", border: "1px solid #ddd", borderRadius: 4, fontSize: 15, fontFamily: "Arial", outline: "none", boxSizing: "border-box", marginBottom: 16 };

  return (
    <form onSubmit={submit}>
      <input style={field} type="text" name="nom" placeholder="Votre nom *" value={form.nom} onChange={handle} required />
      <input style={field} type="email" name="email" placeholder="Votre email *" value={form.email} onChange={handle} required />
      <input style={field} type="tel" name="telephone" placeholder="Votre téléphone" value={form.telephone} onChange={handle} />
      <textarea style={{ ...field, height: 160, resize: "vertical" }} name="message" placeholder="Décrivez votre projet *" value={form.message} onChange={handle} required />
      <button type="submit" style={{ background: "#FF9800", color: "white", padding: "14px 32px", border: "none", borderRadius: 4, fontWeight: 700, fontSize: 16, cursor: "pointer", width: "100%" }}>
        Envoyer ma demande
      </button>
    </form>
  );
}
