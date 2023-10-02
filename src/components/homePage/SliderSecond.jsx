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

function HeroSection() {
  const navigate = useNavigate();
  const navigateToViewing = () => {
  navigate("/viewing");
};
 
  return (
<div className="bg-white">
      <div className="mx-auto  max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-5">
        <div className="scroll-res">
        <div className="mt-10">
        <p className="text-lg font-light text-gray-600"></p>
      <h2 className="text-4xl font-bold tracking-tight  futura text-gray-900">New designers to know</h2>
      <p className=" font-light futura text-black">
      Get your Wish List ready as we present the new guard </p>
      {/* <p className="font-light futura text-black">mastering consciously crafted, modern luxury</p> */}
<a href="/listings" className="inline-flex sm-hidden bg-black items-center mt-3  justify-center px-10 py-3 text-base font-medium text-center text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
Shop New Designers
          </a> 
      </div>
        <div className="flex space-x-2 mt-3 hide-scrollbar transition-transform duration-300 ease-in-out">
          {products.map((product) => (
            <a key={product.id} onClick={navigateToViewing} href={product.href} className="group hover:shadow-xl">
              <div className="w-[160px]">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full "
                />
              </div>
              <h3 className="mt-4 text-lg text-black">{product.name}</h3>
              
            </a>
          ))}
        </div></div>
        <div className="flex justify-center lg-hidden">
        <a href="/listings" className="inline-flex lg-hidden bg-black items-center mt-3  justify-center px-10 py-3 text-base font-medium text-center text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
        Shop New Designers
          </a>  
          </div>
      </div>
    </div>
  );
}

export default HeroSection;
