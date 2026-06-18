"use client";

import { useRef, useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";


import Academia from "./assets/Academia.png";
import Restaurante from "./assets/Restaurante.png";
import Barbearia from "./assets/Barbearia.png";
import LojaVirtual from "./assets/LojaVirtual.png";
import Salao from "./assets/Salao.png";

const projects = [
  {
    id: 1,
    title: "Academia Fitness Pro",
    description:
      "Website moderno para academia com apresentação de planos, grade de aulas, treinos personalizados e área exclusiva para alunos.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    live: "https://teste-site-six-eosin.vercel.app/",
    image: Academia,
  },
  {
    id: 2,
    title: "Restaurante Gourmet",
    description:
      "Site institucional com cardápio digital interativo, reservas online e vitrine visual dos pratos para aumentar conversões.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://restaurante-theta-five.vercel.app/",
    image: Restaurante,
  },
  {
    id: 3,
    title: "Barbearia Premium",
    description:
      "Landing page elegante com agendamento online, catálogo de serviços, galeria de cortes e integração com WhatsApp.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    live: "https://site-barbearia-indol.vercel.app/",
    image: Barbearia,
  },
  {
    id: 4,
    title: "Loja Virtual Store",
    description:
      "E-commerce completo com catálogo de produtos, carrinho inteligente, checkout seguro e gerenciamento de estoque.",
    tags: ["Next.js", "TypeScript", "Supabase", "React"],
    live: "https://loja-virtual-ten-xi.vercel.app/",
    image: LojaVirtual,
  },
  {
    id: 5,
    title: "Salão de Beleza Elegance",
    description:
      "Site sofisticado para salão de beleza com agendamento de serviços, vitrine de procedimentos e contato rápido via WhatsApp.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://site-beleza.vercel.app/",
    image: Salao,
  },
];

export function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const checkScroll = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;

    carousel.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  const autoScroll = () => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft >= maxScroll - 10) {
      carousel.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      carousel.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => {
      carousel.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {
    if (isHovered) return;

    intervalRef.current = setInterval(() => {
      autoScroll();
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <section id="projetos" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Portfólio
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Projetos em <span className="text-primary">Destaque</span>
            </h2>
          </div>

          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-3 glass rounded-xl disabled:opacity-30 hover:bg-primary/20 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-3 glass rounded-xl disabled:opacity-30 hover:bg-primary/20 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[340px] md:w-[400px] snap-start"
            >
              <div className="glass rounded-2xl overflow-hidden group h-full hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image.src}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

<div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">              

                   <a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className="p-4 bg-white/20 backdrop-blur-md rounded-full 
             hover:bg-white/30 hover:scale-110 
             transition-all duration-300 shadow-lg"
>
  <ExternalLink className="w-6 h-6 text-white" />
</a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}