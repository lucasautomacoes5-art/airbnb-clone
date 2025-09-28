"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight, Heart, Star } from 'lucide-react';

type Accommodation = {
  id: number;
  imageUrl: string;
  isGuestFavorite: boolean;
  type: string;
  rating: string;
  price: number;
  period: string;
};

const sanJuanStays: Accommodation[] = [
  {
    id: 1,
    imageUrl: "https://a0.muscache.com/im/pictures/0c5234d1-9cab-4ee1-b6b7-3612ead7ed4b.jpg?im_w=720",
    isGuestFavorite: true,
    type: "Apartamento em San Juan",
    rating: "4.91",
    price: 853,
    period: "por 2 noites",
  },
  {
    id: 2,
    imageUrl: "https://a0.muscache.com/im/pictures/7cc3a552-0cb8-4398-b34d-2b2df5fc398c.jpg?im_w=720",
    isGuestFavorite: false,
    type: "Hotel boutique em San Juan",
    rating: "4.77",
    price: 934,
    period: "por 2 noites",
  },
  {
    id: 3,
    imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-52337284/original/95a30a4d-499d-45f9-968c-23c594a3b344.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Condomínio em San Juan",
    rating: "4.87",
    price: 1307,
    period: "por 2 noites",
  },
  {
    id: 4,
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1392133768712710905/original/c3f85087-28b3-48d4-8afc-f2414f76eb89.jpeg?im_w=720",
    isGuestFavorite: false,
    type: "Apartamento em San Juan",
    rating: "4.88",
    price: 804,
    period: "por 2 noites",
  },
  {
    id: 5,
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1372485223713063500/original/acf32d0e-304d-40eb-b489-8b2eb563238b.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Apartamento em San Juan",
    rating: "4.95",
    price: 809,
    period: "por 2 noites",
  },
  {
    id: 6,
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1443534465538535624/original/a46e9969-5e1c-4e18-9577-e56e8ebb5651.png?im_w=720",
    isGuestFavorite: true,
    type: "Quarto em San Juan",
    rating: "5.0",
    price: 417,
    period: "por 2 noites",
  },
  {
    id: 7,
    imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-764054636835865199/original/1c45448b-b238-4173-b79c-071f4fa8bbd8.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Apartamento em San Juan",
    rating: "4.84",
    price: 927,
    period: "por 2 noites",
  },
  {
    id: 8,
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1045848591273828960/original/482b76c5-de48-4207-90cc-1cdc76e9c30b.jpeg?im_w=720",
    isGuestFavorite: true,
    type: "Apartamento em Carolina",
    rating: "4.75",
    price: 647,
    period: "por 2 noites",
  },
];

const SanJuanSection = () => {
  return (
    <section className="py-6">
      <div className="container">
        <a 
          href="https://www.airbnb.com.br/s/San-Juan/homes?place_id=ChIJbxlo4m9oA4wR3FqTXA9_a60&refinement_paths%5B%5D=%2Fhomes&date_picker_type=FLEXIBLE_DATES&flexible_trip_lengths%5B%5D=WEEKEND_TRIP&flexible_trip_dates%5B%5D=october&search_type=HOMEPAGE_CAROUSEL_CLICK"
          className="flex justify-between items-center mb-4 group"
        >
          <h2 className="text-[20px] font-semibold text-text-primary leading-[24px] group-hover:underline">
            Lugares para ficar em San Juan
          </h2>
          <ChevronRight className="h-5 w-5 text-text-primary" />
        </a>
      </div>
      <div className="container-fluid">
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 lg:-mx-20 lg:px-20 scrollbar-hide">
          {sanJuanStays.map((stay) => (
            <div key={stay.id} className="flex-shrink-0 w-[280px]">
              <a href="#">
                <div className="relative">
                  <Image
                    src={stay.imageUrl}
                    alt={stay.type}
                    width={280}
                    height={266}
                    className="rounded-xl object-cover"
                  />
                  {stay.isGuestFavorite && (
                    <div className="absolute top-3 left-3 bg-white text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
                      Preferido dos hóspedes
                    </div>
                  )}
                  <button className="absolute top-3 right-3">
                    <Heart className="w-6 h-6 text-white" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.8)" strokeWidth={1} />
                  </button>
                </div>
                <div className="mt-2 text-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-text-primary truncate pr-2 leading-[18px]">{stay.type}</h3>
                    <div className="flex items-center flex-shrink-0">
                      <Star className="w-3.5 h-3.5 mr-1 fill-current text-text-primary" />
                      <span className="text-text-primary">{stay.rating.replace('.',',')}</span>
                    </div>
                  </div>
                   <p className="text-text-secondary leading-[18px]">
                    <span className="font-semibold text-text-primary">R${new Intl.NumberFormat('pt-BR').format(stay.price)}</span> {stay.period}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .container {
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 24px;
          padding-right: 24px;
        }
        @media (min-width: 1024px) {
          .container {
            padding-left: 80px;
            padding-right: 80px;
          }
        }
        .container-fluid {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default SanJuanSection;