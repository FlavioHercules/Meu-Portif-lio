"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 mt-20">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">{"<"}</span>
              Flavio.Dev
              <span className="text-blue-400">{" />"}</span>
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Desenvolvedor Front-End focado em criar experiências digitais
              modernas, responsivas e com alta performance.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Navegação
            </h4>

            <div className="flex flex-col gap-3">
              <a
                href="#sobre"
                className="text-zinc-400 hover:text-blue-400 transition"
              >
                Sobre
              </a>

              <a
                href="#habilidades"
                className="text-zinc-400 hover:text-blue-400 transition"
              >
                Habilidades
              </a>

              <a
                href="#projetos"
                className="text-zinc-400 hover:text-blue-400 transition"
              >
                Projetos
              </a>

              <a
                href="#contato"
                className="text-zinc-400 hover:text-blue-400 transition"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Redes */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Conecte-se
            </h4>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-blue-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:contato@email.com"
                className="text-zinc-400 hover:text-blue-400 transition"
              >
                E-mail
              </a>
            </div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-6 text-center"
        >
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Flávio Hércules. Todos os direitos reservados.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}