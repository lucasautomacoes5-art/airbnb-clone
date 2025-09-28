"use client";

import { useState } from "react";
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

type Destination = {
  location: string;
  type: string;
  href: string;
};

const tabs = ["Popular", "Litoral", "Histórica", "Ilhas", "Atividades ao ar livre", "Coisas para fazer"];

const popularDestinations: Destination[] = [
  { location: "Pirenópolis", type: "Aluguéis de cabanas", href: "https://www.airbnb.com.br/pirenopolis-brazil/stays/cabins" },
  { location: "Cidade do México", type: "Aluguéis de casas", href: "https://www.airbnb.com.br/mexico-city/stays/houses" },
  { location: "Guapimirim", type: "Locações por temporada com piscina", href: "https://www.airbnb.com.br/guapimirim-brazil/stays/pools" },
  { location: "Lapinha da Serra", type: "Aluguéis de cabanas", href: "https://www.airbnb.com.br/santana-do-riacho-brazil/stays/cabins" },
  { location: "Bruxelas", type: "Aluguéis de apartamentos", href: "https://www.airbnb.com.br/brussels-belgium/stays/apartments" },
  { location: "Kissimmee", type: "Aluguéis de cabanas", href: "https://www.airbnb.com.br/kissimmee-fl/stays/cabins" },
  { location: "Encarnación", type: "Locações por temporada com piscina", href: "https://www.airbnb.com.br/encarnacion-paraguay/stays/pools" },
  { location: "Paris", type: "Locações por temporada com piscina", href: "https://www.airbnb.com.br/paris-france/stays/pools" },
  { location: "Caraguatatuba", type: "Aluguéis de casas", href: "https://www.airbnb.com.br/caraguatatuba-brazil/stays/houses" },
  { location: "Barcelona", type: "Aluguéis por temporada", href: "https://www.airbnb.com.br/barcelona-spain/stays" },
  { location: "Providencia", type: "Locações por temporada com piscina", href: "https://www.airbnb.com.br/providencia-chile/stays/pools" },
  { location: "Salto", type: "Aluguéis por temporada", href: "https://www.airbnb.com.br/salto-brazil/stays" },
  { location: "Jaguariúna", type: "Aluguéis de apartamentos", href: "https://www.airbnb.com.br/jaguariuna-brazil/stays/apartments" },
  { location: "Pontal do Paraná", type: "Aluguéis de apartamentos", href: "https://www.airbnb.com.br/pontal-do-parana-brazil/stays/apartments" },
  { location: "Bauru", type: "Locações por temporada com piscina", href: "https://www.airbnb.com.br/bauru-brazil/stays/pools" },
  { location: "Canela", type: "Aluguéis de casas", href: "https://www.airbnb.com.br/canela-brazil/stays/houses" },
  { location: "Araraquara", type: "Aluguéis por temporada", href: "https://www.airbnb.com.br/araraquara-brazil/stays" },
  { location: "Criciúma", type: "Aluguéis de casas", href: "https://www.airbnb.com.br/criciuma-brazil/stays/houses" },
  { location: "São Lourenço", type: "Aluguéis de casas", href: "https://www.airbnb.com.br/sao-lourenco-brazil/stays/houses" },
  { location: "Ponta Grossa", type: "Aluguéis de casas", href: "https://www.airbnb.com.br/ponta-grossa-brazil/stays/houses" },
  { location: "Governador Celso Ramos", type: "Aluguéis de chalés", href: "https://www.airbnb.com.br/governador-celso-ramos-brazil/stays/chalets" },
  { location: "Cunha", type: "Aluguéis por temporada", href: "https://www.airbnb.com.br/cunha-brazil/stays" },
  { location: "Milão", type: "Aluguéis de casas", href: "https://www.airbnb.com.br/milan-italy/stays/houses" },
  { location: "São José dos Pinhais", type: "Aluguéis de cabanas", href: "https://www.airbnb.com.br/sao-jose-dos-pinhais-brazil/stays/cabins" },
  { location: "Toque - Toque Grande", type: "Aluguéis de casas", href: "https://www.airbnb.com.br/toque-toque-grande-brazil/stays/houses" },
  { location: "Garanhuns", type: "Locações por temporada com piscina", href: "https://www.airbnb.com.br/garanhuns-brazil/stays/pools" },
  { location: "Madri", type: "Locações por temporada com piscina", href: "https://www.airbnb.com.br/madrid-spain/stays/pools" },
  { location: "Petrolina", type: "Locações por temporada com piscina", href: "https://www.airbnb.com.br/petrolina-brazil/stays/pools" },
  { location: "Los Angeles", type: "Aluguéis por temporada em albergue", href: "https://www.airbnb.com.br/los-angeles-ca/stays/hostels" }
];

const destinationsData: Record<string, Destination[]> = {
  "Popular": popularDestinations,
  "Litoral": popularDestinations,
  "Histórica": popularDestinations,
  "Ilhas": popularDestinations,
  "Atividades ao ar livre": popularDestinations,
  "Coisas para fazer": popularDestinations,
};

const INITIAL_ITEMS_SHOWN = 9;
const NUM_COLUMNS = 6;


export default function InspirationTravel() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [expandedColumns, setExpandedColumns] = useState<Record<number, boolean>>({});

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setExpandedColumns({});
  };

  const handleShowMore = (colIndex: number) => {
    setExpandedColumns(prev => ({ ...prev, [colIndex]: true }));
  };

  const currentDestinations = destinationsData[activeTab] || [];
  const columns: Destination[][] = Array.from({ length: NUM_COLUMNS }, () => []);
  currentDestinations.forEach((dest, index) => {
    columns[index % NUM_COLUMNS].push(dest);
  });
  const itemsPerColumn = popularDestinations.length / NUM_COLUMNS;

  return (
    <section className="bg-secondary">
      <div className="container py-12">
        <h2 className="text-[22px] font-semibold text-foreground mb-6">
          Inspiração para viagens futuras
        </h2>

        <div className="border-b border-border -mb-px">
          <div className="flex space-x-8 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`py-2 px-1 whitespace-nowrap text-sm ${
                  activeTab === tab
                    ? "font-semibold text-foreground border-b-2 border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-8">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col space-y-4">
              {column.slice(0, expandedColumns[colIndex] ? column.length : itemsPerColumn).map((item, itemIndex) => (
                <Link href={item.href} key={itemIndex} className="block hover:underline">
                  <div className="font-semibold text-sm text-foreground">{item.location}</div>
                  <div className="text-sm text-muted-foreground">{item.type}</div>
                </Link>
              ))}
              {column.length > itemsPerColumn && !expandedColumns[colIndex] && (
                <button
                  onClick={() => handleShowMore(colIndex)}
                  className="flex items-center space-x-1 text-sm font-semibold text-foreground hover:underline text-left"
                >
                  <span>Mostrar mais</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}