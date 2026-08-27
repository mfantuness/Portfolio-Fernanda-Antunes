"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectCarouselProps = {
  images: string[];
  projectName: string;
};

export function ProjectCarousel({ images, projectName }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-rose-50">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Imagem ${index + 1} do ${projectName}`}
          fill
          priority={index === 0}
          className={`object-cover transition duration-500 ease-out ${
            index === activeIndex
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-105 opacity-0"
          }`}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-50/90 text-xl text-slate-900 shadow-md transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 focus:ring-offset-rose-50"
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-50/90 text-xl text-slate-900 shadow-md transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 focus:ring-offset-rose-50"
          >
            &rarr;
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-950/45 px-2.5 py-2">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir para a imagem ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`size-2.5 rounded-full transition ${
                  index === activeIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}