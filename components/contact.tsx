"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, MapPin, Phone } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Olá Flávio!%0A%0A*Nova mensagem pelo site*%0A%0A👤 Nome: ${formState.name}%0A📧 Email: ${formState.email}%0A💬 Mensagem: ${formState.message}`;

    const url = `https://wa.me/5574981527095?text=${text}`;
    window.open(url, "_blank");

    setSubmitted(true);
    setFormState({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "flaviors875@gmail.com",
      href: "mailto:flaviors875@gmail.com",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Bahia, Brasil",
      href: "#",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 74 98152-7095",
      href: "https://wa.me/5574981527095",
    },
  ];

  return (
    <section id="contato" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Contato
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vamos <span className="text-primary">Conversar?</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato e vamos criar algo incrível juntos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Coluna esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="flex items-center gap-4 p-4 glass rounded-xl group hover:neon-glow transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Processo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p className="text-muted-foreground mb-4">Como funciona?</p>

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Conversamos",
                    desc: "Você me explica sua ideia, objetivo e necessidades.",
                  },
                  {
                    step: "02",
                    title: "Planejamento",
                    desc: "Defino estrutura, design e estratégia do seu site.",
                  },
                  {
                    step: "03",
                    title: "Desenvolvimento",
                    desc: "Transformo a ideia em um site moderno e profissional.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    className="glass rounded-2xl p-4 hover:neon-glow transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.15 }}
                  >
                    <div className="flex gap-4 items-start">
                      <div className="min-w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold">
                        {item.step}
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
              <div className="space-y-6">
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl"
                />

                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  placeholder="Seu email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl"
                />

                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  placeholder="Sua mensagem..."
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl resize-none"
                />

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 hover:neon-glow transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? (
                    "WhatsApp Aberto ✓"
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}