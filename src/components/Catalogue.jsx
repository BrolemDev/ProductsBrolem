
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
Catalogue.propTypes = {
  language: PropTypes.string.isRequired // Definir que language es requerido y debe ser de tipo string
};
const productsEn = [
  {
    id: 1,
    name: 'ADZUKI BEANS',
    href: 'adzuki_beans_en',
    imageSrc: '/img/en/adzuki_beans_en.webp',
    imageAlt: "ADZUKI BEANS",
  },
  {
    id: 2,
    name: 'GREEN COFFEE BEANS',
    href: 'green_coffee_beans_en',
    imageSrc: '/img/en/green_coffee_beans_en.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'GREEN MUNG BEANS',
    href: 'green_mung_beans_en',
    imageSrc: '/img/en/green_mung_beans_en.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'PEELED BLACK EYED',
    href: 'peeled_black_eyed_en',
    imageSrc: '/img/en/peeled_black_eyed_en.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    name: 'PEELED MUNG BEANS',
    href: 'peeled_mung_beans_en',
    imageSrc: '/img/en/peeled_mung_beans_en.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]

const productsKo = [
  {
    id: 1,
    name: 'ADZUKI BEANS',
    href: 'adzuki_beans_ko',
    imageSrc: '/img/ko/adzuki_beans_ko.webp',
    imageAlt: "ADZUKI BEANS",
  },
  {
    id: 2,
    name: 'GREEN COFFEE BEANS',
    href: 'green_coffee_beans_ko',
    imageSrc: '/img/ko/green_coffee_beans_ko.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'GREEN MUNG BEANS',
    href: 'green_mung_beans_ko',
    imageSrc: '/img/ko/green_mung_beans_ko.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'PEELED BLACK EYED',
    href: 'peeled_black_eyed_ko',
    imageSrc: '/img/ko/peeled_black_eyed_ko.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    name: 'PEELED MUNG BEANS',
    href: 'peeled_mung_beans_ko',
    imageSrc: '/img/ko/peeled_mung_beans_ko.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]

export default function Catalogue({ language }) {
  // Importa los datos de productos según el idioma
  const products = language === 'ko' ? productsKo : productsEn;

  return (
    <div className="bg-gradient-to-b from-green-900 to-green-500">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={product.href} key={product.href}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

