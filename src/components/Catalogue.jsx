
const products = [
  {
    id: 1,
    name: 'ADZUKI BEANS',
    href: 'adzuky_beans_en',
    imageSrc: '/img/adzuky_beans_en.webp',
    imageAlt: "ADZUKI BEANS",
  },
  {
    id: 2,
    name: 'GREEN COFFEE BEANS',
    href: 'green_coffee_beans_en',
    imageSrc: '/img/green_coffee_beans_en.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'GREEN MUNG BEANS',
    href: 'green_mung_beans_en',
    imageSrc: '/img/green_mung_beans_en.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'PEELED BLACK EYED',
    href: 'peeled_black_eyed_en',
    imageSrc: '/img/peeled_black_eyed_en.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    name: 'PEELED MUNG BEANS',
    href: 'peeled_mung_beans_en',
    imageSrc: '/img/peeled_mung_beans_en.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]

export default function Catalogue() {
  return (
    <div className="bg-gradient-to-b from-green-900 to-green-500">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <a href={product.href}>

                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
