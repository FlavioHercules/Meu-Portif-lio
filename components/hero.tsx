"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-primary text-sm md:text-base font-medium tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Bem-vindo ao meu portfólio
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Olá, eu sou{" "}
            <span className="text-primary neon-text">Flávio</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Front-end Developer
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg mb-12 text-pretty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Criando experiências digitais modernas e interfaces pixel-perfect
            com React, TypeScript e as mais recentes tecnologias web.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#projetos"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl neon-glow hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Projetos
            </motion.a>
            <motion.a
              href="#contato"
              className="px-8 py-4 glass text-foreground font-semibold rounded-xl hover:bg-primary/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Entre em Contato
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { repeat: Infinity, duration: 1.5 },
          }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
