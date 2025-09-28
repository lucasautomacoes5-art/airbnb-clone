"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";

interface Accommodation {
  id: number;
  image: string;
  isGuestFavorite: boolean;
  type: string;
  rating: number;
  price: number;
  nights: number;
  url: string;
}

const accommodations: Accommodation[] = [
  {
    id: 1,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/ff24647e-7a7d-4f83-ad50-cb9150279db2-1.jpg",
    isGuestFavorite: false,
    type: "Quarto em Chicago",
    rating: 4.82,
    price: 570,
    nights: 2,
    url: "#"
  },
  {
    id: 2,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/69f5d94d-0d71-48b7-be3a-66da9bccf58d-2.jpeg",
    isGuestFavorite: false,
    type: "Quarto em West Town",
    rating: 4.86,
    price: 1033,
    nights: 2,
    url: "#"
  },
  {
    id: 3,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/6c6e2b85-cc4d-409f-a4a4-665bacacb699-3.jpeg",
    isGuestFavorite: false,
    type: "Quarto em Chicago",
    rating: 5.0,
    price: 535,
    nights: 2,
    url: "#"
  },
  {
    id: 4,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/87b2ca31-5656-4023-978c-6e7450823540-4.jpeg",
    isGuestFavorite: true,
    type: "Apartamento em Uptown",
    rating: 4.94,
    price: 1213,
    nights: 2,
    url: "#"
  },
  {
    id: 5,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/6b52c80a-3d80-4fd6-a32c-9fe6b4e80d97-5.jpeg",
    isGuestFavorite: true,
    type: "Suíte de hóspedes em Chicago",
    rating: 4.9,
    price: 871,
    nights: 2,
    url: "#"
  },
  {
    id: 6,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/783292c1-4cbf-4950-bcb4-a3448e48b220-airbnb-com-br/assets/images/6eee1223-ab2b-4793-b4c3-ef260460780b-6.jpg",
isGuestFavorite: true,
    type: "Quarto em Roscoe Village",
    rating: 4.96,
    price: 1176,
    nights: 2,
    url: "#"
  }
];

const PropertyCard = ({ accommodation }: { accommodation: Accommodation }) => {
  const { image, isGuestFavorite, type, rating, price, nights, url } = accommodation;

  return (
    <div className="flex-shrink-0 w-[calc(100%/2.2)] sm:w-[calc(100%/3.2)] md:w-[calc(100%/4.2)] lg:w-[calc(100%/5.2)] xl:w-[calc(100%/6.2)]">
      <a href={url} className="block">
        <div className="relative">
           {isGuestFavorite && (
            <div className="absolute top-3 left-3 z-10 bg-white rounded-full px-3 py-1">
              <span className="text-xs font-bold text-text-primary">Preferido dos hóspedes</span>
            </div>
          )}
          <button className="absolute top-3 right-3 z-10 p-1 rounded-full group outline-none" aria-label="Adicionar aos favoritos">
            <Heart
              className="w-6 h-6 stroke-white fill-black/40 group-hover:fill-black/60 group-focus:fill-primary transition-colors"
            />
          </button>
          <Image
            src={image}
            alt={type}
            width={296}
            height={281}
            className="w-full aspect-[20/19] object-cover rounded-xl"
          />
        </div>
        <div className="mt-2 text-sm">
          <div className="flex justify-between items-start">
            <p className="font-semibold text-text-primary pr-2">{type}</p>
            <div className="flex items-center flex-shrink-0">
              <Star className="w-3.5 h-3.5 fill-current text-text-primary mr-1" />
              <span className="text-text-primary">{rating.toLocaleString('pt-BR', { minimumFractionDigits: rating % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>
          <p className="text-text-secondary">
            <span className="font-semibold text-text-primary">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(price)}
            </span>
            &nbsp;por {nights} noites
          </p>
        </div>
      </a>
    </div>
  );
};

const FeaturedChicago = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const handleScroll = useCallback(() => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setShowLeft(scrollLeft > 1);
            setShowRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.clientWidth * 0.9;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };
    
    useEffect(() => {
      const carousel = carouselRef.current;
      if(carousel) {
        handleScroll();
        carousel.addEventListener('scroll', handleScroll, { passive: true });
        return () => carousel.removeEventListener('scroll', handleScroll);
      }
    }, [handleScroll]);

    return (
        <section className="py-6 md:py-12">
            <div className="container">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-text-primary leading-6">
                        Acomodações muito procuradas em Chicago
                    </h2>
                    <div className="hidden sm:flex items-center space-x-2">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!showLeft}
                            aria-label="Rolar para a esquerda"
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition"
                        >
                            <ChevronLeft className="h-4 w-4 text-text-primary" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!showRight}
                            aria-label="Rolar para a direita"
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-white hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition"
                        >
                            <ChevronRight className="h-4 w-4 text-text-primary" />
                        </button>
                    </div>
                </div>
                <div
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth pb-4 -mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {accommodations.map((accommodation) => (
                        <PropertyCard key={accommodation.id} accommodation={accommodation} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedChicago;