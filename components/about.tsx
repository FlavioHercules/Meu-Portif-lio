"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevendo código escalável e de fácil manutenção",
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Criando interfaces intuitivas e visualmente atraentes",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimizando aplicações para máxima velocidade",
    },
  ];

  return (
    <section id="sobre" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
            Sobre Mim
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
            Transformando ideias em{" "}
            <span className="text-blue-400">experiências digitais</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sou um desenvolvedor front-end apaixonado por criar interfaces modernas e acessíveis.
              Com mais de 4 anos de experiência em React e TypeScript.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Cada projeto é uma oportunidade de criar algo melhor, mais rápido e mais bonito.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Next.js", "Tailwind", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-blue-500/20 hover:border-blue-500/40 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {highlights.map((itemData) => (
              <motion.div
                key={itemData.title}
                variants={item}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition"
              >
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <itemData.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {itemData.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {itemData.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}