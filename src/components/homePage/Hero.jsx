import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";
import  "./Hero.module.css";
import Image from './301812806_106078615569021_7118600893979540292_n-removebg.png';

const navigation = [
  { name: 'New In', href: '#' },
  { name: 'Designers', href: '#' },
  { name: 'Clothing', href: '#' },
  { name: 'Dresses', href: '#'},
  { name: 'Bags', href: '#' },
  { name: 'Accessories', href: '#' },
  { name: 'Shoes', href: '#' },
  { name: 'Collections', href: '#' },
  { name: 'Journal', href: '#' }

]


export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   const navigate = useNavigate();
    const navigateToAuth = () => {
    navigate("/auth");
  };
  return (
    <div className="bg-white">
      <div className='fixed top-0 inset-x-0 z-50'>
      <header className='absolute inset-x-0 top-0 z-50 bg-gradient-to-r to-[#B0A3CE] from-[#ECCDCB] opacity-80'>
        <nav className="flex items-center lg:justify-center  p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <div className='flex text-center lg:ml-1 ml-20'>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <p className="text-2xl font-bold logo-font">RELISTED</p>
            <p className='logo-font text-xs'>Labels</p>
          </a>
          </div>
        </nav>
      </header>
      <header className="mt-[90px] lg:bg-white">
      <nav className="flex items-center justify-center pt-5 pb-3 lg:px-8" aria-label="Global">
        
       
        <div className="hidden gap-x-12 lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        
      </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                RelistedLabels
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    onClick={navigateToAuth}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      </div>
      
      <div className='p-5'>
            <img src="https://questgig.com/api/relisted/images/327862073_1329718951174745_4753541720980693501_n (2).jpg" data-aos="zoom-in" data-aos-duration="1200" className='hero-img' />
            <div className='flex justify-center mt-5'>
            <h1 className='lg:text-3xl sm:text-lg font-bold futura'>ACCESS THE BRANDS YOU LOVE AND EMPOWER YOUR WARDROBE</h1>
            </div>
      </div>
   
      </div>
  )
}
