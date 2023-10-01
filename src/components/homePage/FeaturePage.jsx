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
  {
    id: 5,
    name: 'Sophia Webster',
    href: '#',
    price: 'Rent From $45',
    subtitle: 'Yellow Shoes, UK 45',
    imageSrc: 'https://by-rotation-prod.imgix.net/1e454e81-cb26-4b54-bfd6-f92fc08b7c64.jpeg?ixlib=js-3.7.1&auto=format&w=640',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Category() {
  const navigate = useNavigate();
  const navigateToViewing = () => {
  navigate("/viewing");
};
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <p className="text-lg font-light text-gray-600 ml-5">817 NEW ITEMS</p>
      <h2 className="text-2xl font-bold tracking-tight ml-5 futura text-gray-900">New In</h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} onClick={navigateToViewing} href={product.href} className="group hover:shadow-xl p-3">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
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
        <div className="flex justify-center">
        <a href="/listings" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
           View Latest Collections
          </a> 
          </div>
      </div>
    </div>
  )
}
