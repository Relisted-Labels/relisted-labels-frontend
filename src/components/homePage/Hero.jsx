import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";
import  "./Hero.module.css";

const navigation = [
  { name: 'New In', href: '#' },
  { name: 'Designers', href: '#' },
  { name: 'Clothing', href: '#' },
  { name: 'Dresses', href: '#'},
  { name: 'Bags', href: '#' },
  { name: 'Accessories', href: '#' }

]


export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   const navigate = useNavigate();
    const navigateToAuth = () => {
    navigate("/auth");
  };
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-[#B0A3CE] to-[#ECCDCB] opacity-80 ">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 ">
              <span className="sr-only">Your Company</span>
              <p class="text-1xl font-bold logo-font">RelistedLabels</p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
             Get Started <span aria-hidden="true">&rarr;</span>
            </a>
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
      
      <div className="grid max-w-screen-xl mt-3 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
        <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-gradient-to-r from-[#B0A3CE] to-[#ECCDCB] rounded-full text-gray-900 px-4 py-1.5 mr-3">Hot</span> <span class="text-sm font-medium">50% Discount for New Users</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
          <h1 className="max-w-2xl mb-4 text-5xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Join the world’s largest shared wardrobe</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Rent, lend and sell over 80,000 designer fashion items</p>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#B0A3CE] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Continue as Guest
          </a> 
        </div>
        <div className="hidden lg:mt-0  lg:col-span-5 lg:flex mt-3">
          <img src="https://scontent.cdninstagram.com/v/t51.2885-15/301812806_106078615569021_7118600893979540292_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=Q6Za9j1OiW0AX8mRopj&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjkxNDk2MDY1MDQzMTYwMzUwNQ%3D%3D.2-ccb7-5&oh=00_AfApMgLcmvMind4PLjc90yZxiGmdE6pg5KxSpM1P2FdApw&oe=651E5BF7&_nc_sid=10d13b" alt="mockup" className=''/>
        </div>                
      </div>
   
      </div>
  )
}
