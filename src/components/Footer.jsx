import React from 'react'

const Footer = () => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-24 lg:my-16 my-6'>
        <div className="cols-span-1">
            <div className="flex gap-5">
                <img src="../../public/image-retro-pcs.jpg" className='h-32' alt="" />
                <div>
                    <h1 className="font-bold text-grayish_blue text-3xl mb-1">01</h1>
                    <h1 className='text-lg font-semibold hover:text-soft_red transition cursor-pointer'>Reviving Retro PCs</h1>
                    <p className="text-dark_grayish_blue">
                        What happens when old PCs are give modern upgrades?
                    </p>
                </div>
            </div>
        </div>
        <div className="cols-span-1">
            <div className="flex gap-5">
                <img src="../../public/image-top-laptops.jpg" className='h-32' alt="" />
                <div>
                    <h1 className="font-bold text-grayish_blue text-3xl mb-1">02</h1>
                    <h1 className='text-lg font-semibold hover:text-soft_red transition cursor-pointer'>Top 10 Laptops of 2022</h1>
                    <p className="text-dark_grayish_blue">
                        Our best picks for various needs and budgets.
                    </p>
                </div>
            </div>
        </div>
        <div className="cols-span-1">
            <div className="flex gap-5">
                <img src="../../public/image-gaming-growth.jpg" className='h-32' alt="" />
                <div>
                    <h1 className="font-bold text-grayish_blue text-3xl mb-1">03</h1>
                    <h1 className='text-lg font-semibold hover:text-soft_red transition cursor-pointer'>The Growth of Gaming</h1>
                    <p className="text-dark_grayish_blue">
                        How the pandemic has sparked fresh opportunities.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer