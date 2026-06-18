"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Git", icon: "🔀" },
  { name: "HTML5", icon: "🌐" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Habilidades
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Tecnologias que <span className="text-primary">domino</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
          <motion.div
  key={skill.name}
  className="glass p-6 rounded-2xl border border-white/10 group hover:border-primary/40 transition-all duration-300"
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: index * 0.1, duration: 0.6 }}
  whileHover={{
    scale: 1.03,
    y: -5,
  }}
>
  <div className="flex items-center gap-4">
    <span className="text-3xl">{skill.icon}</span>

    <div>
      <h3 className="text-lg font-semibold text-foreground">
        {skill.name}
      </h3>

      <p className="text-sm text-muted-foreground">
        Tecnologia utilizada em projetos reais
      </p>
    </div>
  </div>
</motion.div>
          ))}
        </div>

     
      </div>
    </section>
  );
}
