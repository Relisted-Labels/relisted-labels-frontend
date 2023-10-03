import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon
import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    title: 'Design E',
    image: 'https://questgig.com/api/relisted/images/image17.jpg',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological .',
    link: '#',
  },
  {
    id: 2,
    title: 'Design D',
    image: 'https://questgig.com/api/relisted/images/image11.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.',
    link: '#',
  },
  {
    id: 3,
    title: 'Design C',
    image: 'https://questgig.com/api/relisted/images/image13.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.',
    link: '#',
  },
  {
    id: 3,
    title: 'Design B',
    image: 'https://questgig.com/api/relisted/images/image13.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.',
    link: '#',
  },
  {
    id: 3,
    title: 'Design A',
    image: 'https://questgig.com/api/relisted/images/image13.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.',
    link: '#',
  },
  
];

export default function EndFeature() {
  const navigate = useNavigate();
  const navigateToViewing = () => {
  navigate("/viewing");
};
  return (
    <div className='bg-purple-50 p-5'>
    <div className='flex justify-center'><h1 className='text-2xl futura'>BLACK - TIE</h1></div>
    
    <div className="flex space-x-2 justify-center hide-scrollbar p-5">
{data.map((item) => (
            <a key={item.id} onClick={navigateToViewing} href={item.link} className="group hover:shadow-xl">
              <div className="w-[170px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full "
                />
              </div>
              <h3 className="mt-4 text-lg text-black">{item.title}</h3>
              <p className="text-sm text-gray-400">UK 6</p>
              <p className="text-sm text-black">Rent from £26</p>
              <p className="text-sm text-gray-400 line-through">RRP £120</p>
            </a>
          ))}
    </div>
    </div>
  );
}
