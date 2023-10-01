import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon

const data = [
  {
    id: 1,
    title: 'Noteworthy technology acquisitions',
    image: 'https://questgig.com/api/relisted/images/image17.jpg',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological .',
    link: '#',
  },
  {
    id: 2,
    title: 'Another Technology Topic',
    image: 'https://questgig.com/api/relisted/images/image11.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.',
    link: '#',
  },
  {
    id: 3,
    title: 'Yet Another Technology Topic',
    image: 'https://questgig.com/api/relisted/images/image13.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.',
    link: '#',
  },
];

export default function EndFeature() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="max-w-md bg-white  "
        >
          <a href={item.link}>
            <img
              data-aos="fade-in"
              data-aos-duration="1200"
              className=""
              src={item.image}
              alt={item.title}
            />
          </a>
          <div className="p-5">
            <a href={item.link}>
              <h5 className="mb-2 text-2xl font-light tracking-tight times-new-roman text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 times-new-roman">
              {item.description}
            </p>
            <a
              href={item.link}
              className="inline-flex items-center  text-sm font-medium text-center text-gray-900 " >
              Read more <FaArrowRight className="w-2 h-2 ml-2" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
