import { useNavigate } from "react-router-dom";
const products = [
  {
    id: 1,
    name: 'KNWLS',
    href: '#',
    subtitle: 'Multicolor Top, UK 14',
    price: 'Rent From $48',
    imageSrc: 'https://by-rotation-prod.imgix.net/d5160c3c-e955-41eb-a662-2a5f4c367c07.jpeg?ixlib=js-3.7.1&auto=format&w=640',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    subtitle: 'White Dress, UK 15',
    price: 'Rent From $35',
    imageSrc: 'https://by-rotation-prod.imgix.net/11fe8a29-67ea-4466-998c-89e772cda089.jpeg?ixlib=js-3.7.1&auto=format&w=384',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Anne Louise Boutique',
    href: '#',
    price: 'Rent From $89',
    subtitle: 'Orange Dress, UK 8',
    imageSrc: 'https://by-rotation-prod.imgix.net/ac7082c2-4efd-4356-8b9b-cb4528be0324.jpeg?ixlib=js-3.7.1&auto=format&w=384',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Cult Gaia',
    href: '#',
    price: 'Rent From $35',
    subtitle: 'Silver Bag',
    imageSrc: 'https://by-rotation-prod.imgix.net/509a41c3-cc8d-4449-9854-6c0fb94356e2.jpeg?ixlib=js-3.7.1&auto=format&w=384',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // {
  //   id: 5,
  //   name: 'Sophia Webster',
  //   href: '#',
  //   price: 'Rent From $45',
  //   subtitle: 'Yellow Shoes, UK 45',
  //   imageSrc: 'https://by-rotation-prod.imgix.net/1e454e81-cb26-4b54-bfd6-f92fc08b7c64.jpeg?ixlib=js-3.7.1&auto=format&w=640',
  //   imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  // },
  // More products...
]

function HeroSection() {
  const navigate = useNavigate();
  const navigateToViewing = () => {
  navigate("/viewing");
};
 
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-10 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-4">
          <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-1xl">
          New designers to know
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
Get your Wish List ready as we present the new guard of brands mastering consciously crafted, modern luxury
          </p>
         
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Shop New Designers
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} onClick={navigateToViewing} href={product.href} className="group hover:shadow-xl p-3">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden   bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>
              
            </a>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
