import React from 'react';
import { Globe, Facebook, Twitter, Instagram } from 'lucide-react';

const footerColumns = [
  {
    title: 'Ajuda',
    links: [
      { text: 'Receber ajuda com problema de segurança', href: '#' },
      { text: 'AirCover', href: '#' },
      { text: 'Antidiscriminação', href: '#' },
      { text: 'Apoio à pessoa com deficiência', href: '#' },
      { text: 'Opções de cancelamento', href: '#' },
      { text: 'Reporte um problema no bairro', href: '#' },
    ],
  },
  {
    title: 'Anunciando no Airbnb',
    links: [
      { text: 'Anuncie sua experiência no Airbnb', href: '#' },
      { text: 'Anuncie seu serviço no Airbnb', href: '#' },
      { text: 'AirCover para anfitriões', href: '#' },
      { text: 'Recursos para anfitriões', href: '#' },
      { text: 'Fórum da comunidade', href: '#' },
      { text: 'Hospedagem responsável', href: '#' },
      { text: 'Participe de uma aula gratuita de hospedagem', href: '#' },
      { text: 'Encontre um coanfitrião', href: '#' },
    ],
  },
  {
    title: 'Airbnb',
    links: [
      { text: 'Newsroom', href: '#' },
      { text: 'Carreiras', href: '#' },
      { text: 'Investidores', href: '#' },
      { text: 'Locais emergenciais Airbnb.org', href: '#' },
    ],
  },
];

const legalLinks = [
  { text: 'Privacidade', href: '#' },
  { text: 'Termos', href: '#' },
  { text: 'Mapa do site', href: '#' },
  { text: 'Informações da empresa', href: '#' },
];

const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Instagram, label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8 mb-12">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="sr-only">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="text-sm text-foreground hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex flex-col-reverse gap-y-4 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-2 text-sm text-foreground">
              <span>&copy; 2025 Airbnb, Inc.</span>
              {legalLinks.map((link) => (
                <React.Fragment key={link.text}>
                  <span>&middot;</span>
                  <a href={link.href} className="hover:underline">
                    {link.text}
                  </a>
                </React.Fragment>
              ))}
            </div>

            <div className="flex justify-center items-center gap-x-4 md:gap-x-6">
              <button className="flex items-center text-sm font-semibold hover:underline">
                <Globe className="h-4 w-4 mr-2" />
                Português (BR)
              </button>
              <button className="flex items-center text-sm font-semibold hover:underline">
                <span className="font-sans">R$</span>
                <span className="ml-1">BRL</span>
              </button>
              <div className="flex items-center gap-x-5">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} aria-label={label} className="text-foreground hover:text-gray-700">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;