import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,      // Correspond à {{name}}
      email: email,    // Correspond à {{email}}
      message: message // Correspond à {{message}}
    };

    emailjs.send(
      "service_thpn7xu",   // ID du service EmailJS
      "template_2h7n9kk",  // ID du template que tu as créé
      templateParams,
      "AxR8O4ueM8wbJlZUq"    // Clé publique EmailJS
    )
    .then(() => {
      alert("Message envoyé !");
      setName(""); setEmail(""); setMessage("");
    })
    .catch((err) => {
      console.error("Erreur EmailJS:", err);
      alert("Erreur lors de l'envoi.");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
