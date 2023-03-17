import React from 'react'

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-3'>
        <div className="col-span-3">
            <img src="../../public/image-web-3-desktop.jpg" alt="" />
            <div className="mt-8 grid lg:grid-cols-4 grid-cols-1 gap-5 md:gap-0">
                <div className="col-span-2">
                    <h1 className="md:text-6xl text-5xl font-[800] lg:w-[90%] w-auto">
                        The Bright Future of Web 3.0?
                    </h1>
                </div>
                <div className="col-span-2 lg:pl-24">
                    <p className=' text-dark_grayish_blue'>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                    </p>
                    <button className="px-7 py-2 bg-soft_red mt-8 text-off_white">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
        <div className="col-span-1">
            <div className='md:px-4 px-7 py-8 bg-very_dark_blue lg:mt-0 mt-6'>
                <h1 className="text-3xl font-bold text-soft_orange mb-7">New</h1>
                <div className="text-off_white">
                    <h1 className="font-semibold text-lg cursor-pointer transition hover:text-soft_orange">
                        Hydrogen VS Electric Cars
                    </h1>
                    <p className="mt-2 text-[15px] text-dark_grayish_blue">
                    Will hydrogen-fueled cars ever catch up to EVs?
                    </p>
                </div>
                <div className='bg-dark_grayish_blue h-[1px] w-full lg:my-10 my-5'></div>
                <div className="text-off_white">
                    <h1 className="font-semibold text-lg cursor-pointer transition hover:text-soft_orange">
                        The Downsides of AI Artistry
                    </h1>
                    <p className="mt-2 text-[15px] text-dark_grayish_blue">
                        What are the possible adverse effects of on-demand AI image generation?
                    </p>
                </div>
                <div className='bg-dark_grayish_blue h-[1px] w-full lg:my-10 my-5'></div>
                <div className="text-off_white">
                    <h1 className="font-semibold text-lg cursor-pointer transition hover:text-soft_orange">
                        Is VC Funding Drying Up?
                    </h1>
                    <p className="mt-2 text-[15px] text-dark_grayish_blue">
                        Private funding by VC firms is down 50% YOY. We take a look at what that means.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero