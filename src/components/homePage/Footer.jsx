import React from "react"
export default function Footer() {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900">
         Relisted Labels  
      </a>
      <p class="my-6 text-gray-500 ">Buy, Sell and Rent Your Favourite Cloths</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900">
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center ">© 2023 <a href="#" class="hover:underline">Relisted Labels ™</a>. All Rights Reserved.</span>
  </div>
</footer>
  )
}