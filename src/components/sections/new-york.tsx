"use client";

import React from 'react';
import Image from 'next/image';
import { Star, ChevronRight, Heart } from 'lucide-react';

interface Property {
  id: number;
  imageUrl: string;
  isGuestFavorite: boolean;
  title: string;
  rating: number;
  price: number;
  priceNote: string;
}

const nyProperties: Property[] = [
  {
    id: 1,
    imageUrl: "https://a0.muscache.com/im/pictures/8e023fdc-590a-44bd-a25f-e8b2dbfed1eb.jpg?im_w=720",
    isGuestFavorite: true,
    title: "Quarto em New York",
    rating: 4.94,
    price: 1529,
    priceNote: "por 2 noites",
  },
  {
    id: 2,
    imageUrl: "https://a0.muscache.com/im/pictures/ab947823-a193-4e81-8303-cf970f8abd4a.jpg?im_w=720",
    isGuestFavorite: true,
    title: "Quarto em Brooklyn",
    rating: 4.88,
    price: 965,
    priceNote: "por 2 noites",
  },
  {
    id: 3,
    imageUrl: "https://a0.muscache.com/im/pictures/58f47fcd-e3bd-4ab3-9000-5ab7002adf75.jpg?im_w=720",
    isGuestFavorite: true,
    title: "Quarto em Weehawken",
    rating: 4.98,
    price: 996,
    priceNote: "por 2 noites",
  },
  {
    id: 4,
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1312468306145863403/original/ef834110-0bb4-4d29-b8d5-b2b35dd5f366.jpeg?im_w=720",
    isGuestFavorite: true,
    title: "Quarto em Weehawken",
    rating: 4.94,
    price: 1294,
    priceNote: "por 2 noites",
  },
  {
    id: 5,
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1330344097495436075/original/3a0703a9-ae65-4dee-9afb-6b4627c0b08b.jpeg?im_w=720",
    isGuestFavorite: true,
    title: "Quarto em Brooklyn",
    rating: 4.87,
    price: 834,
    priceNote: "por 2 noites",
  },
  {
    id: 6,
    imageUrl: "https://a0.muscache.com/im/pictures/33089515/f075297a_original.jpg?im_w=720",
    isGuestFavorite: true,
    title: "Quarto em New York",
    rating: 4.94,
    price: 1668,
    priceNote: "por 2 noites",
  },
];

const PropertyCard = ({ property }: { property: Property }) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(property.price);

  return (
    <div className="w-72 flex-shrink-0">
      <a href="#" className="block">
        <div className="relative">
          <Image
            src={property.imageUrl}
            alt={property.title}
            width={288}
            height={273}
            className="rounded-xl w-full object-cover aspect-[20/19]"
          />
          {property.isGuestFavorite && (
            <div className="absolute top-3 left-3 bg-white rounded-full px-2.5 py-1 text-xs font-semibold text-text-primary leading-tight shadow-sm">
              Preferido dos hóspedes
            </div>
          )}
          <button className="absolute top-3 right-3 text-white" aria-label="Adicionar aos favoritos">
            <Heart className="w-6 h-6 stroke-white" style={{ strokeWidth: 2, fill: 'rgba(0,0,0,0.5)' }} />
          </button>
        </div>
        <div className="mt-2 text-sm">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-text-primary leading-tight truncate pr-2">{property.title}</h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star className="w-3.5 h-3.5 fill-current text-text-primary" />
              <span className="text-text-primary leading-tight">{property.rating.toFixed(2).replace('.',',')}</span>
            </div>
          </div>
          <p className="text-text-secondary leading-tight mt-0.5">
            <span className="font-semibold text-text-primary">{formattedPrice.replace('R$', 'R$ ')}</span> {property.priceNote}
          </p>
        </div>
      </a>
    </div>
  );
};

const NewYorkSection = () => {
    return (
        <section className="py-8 bg-background">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-text-primary">
                        <a href="#" className="hover:underline flex items-center group">
                            Acomodações muito procuradas em Nova York
                            <ChevronRight className="w-5 h-5 ml-1 mt-1 transition-transform group-hover:translate-x-1" />
                        </a>
                    </h2>
                </div>
                <div className="flex gap-6 overflow-x-auto pb-4">
                    {nyProperties.map((prop) => <PropertyCard key={prop.id} property={prop} />)}
                </div>
            </div>
        </section>
    );
};

export default NewYorkSection;