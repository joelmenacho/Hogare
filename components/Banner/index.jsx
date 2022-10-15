import React from "react";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="py-10 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10 md:mt-32">
            <div className="mb-16 text-center lg:mb-0 lg:text-left">
                <span className="uppercase font-semibold text-red-500 text-md">
                    Nosotros
                </span>
                <h1 className="text-4xl font-bold leading-12 mt-4 md:text-5xl">
                    Deticated to Delight you
                </h1>
                <p className="my-6 text-gray-600 leading-8">
                Imagina una tienda donde puedas ver sin salir de tu casa, con la realidad virtual es posible.
                </p>
                <Link href="/about-us">
                    <a className="flex justify-center items-center gap-2 w-max m-auto py-2 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:py-3 md:px-6" title="Read More">
                        Read More
                    </a>
                </Link>
            </div>

            <div>
                <img src="./business_deal.svg" alt="Business-Deal" width="400px" max-width="100%" />
            </div>
        </div>
    );
}

export default Banner;