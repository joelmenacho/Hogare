import React from 'react';
import Link from "next/link";

// React Icons
import { GiHamburger } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="py-8 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10 md:py-32">
        <div className="mb-16 text-center lg:mb-0 lg:text-left">
            <h1 className="text-4xl font-bold leading-12 md:text-6xl">
                Hogare Store <span className="text-red-500">Delivery</span> Partner.
            </h1>
            <p className="my-6 text-gray-600 leading-8">
            Todos en Computadoras Gamer · PC Gamer Ryu RGB Core i7 3th · PC Gamer Haku Plus Core I5 3TH · 
            PC Gamer Draco-RGB CPU Intel Core i7 10700F · PC Gamer Draco-RGB Plus .Todos en Computadoras Gamer · PC Gamer Ryu RGB Core i7 3th · PC Gamer Haku Plus Core I5 3TH · PC Gamer Draco-RGB CPU Intel Core i7 10700F · PC Gamer Draco-RGB Plus .,
            </p>
            <Link href="/menu">
                <a className="flex justify-center items-center gap-2 w-max m-auto py-2 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:py-3 md:px-6" title="Order Now">
                    <span>Order Now</span>
                    <span><GiHamburger /></span>
                </a>
            </Link>
        </div>

        <div>
            <img src="./on_the_way.svg" alt="Women-Delivering-A-Package" />
        </div>
    </div>
  )
}

export default Hero;