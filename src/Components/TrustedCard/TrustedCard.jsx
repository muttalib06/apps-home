import React from 'react';

const TrustedCard = () => {
        return (
                <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white flex justify-between items-center flex-col space-y-5 py-5'>
                        <h2 className='text-center mt-10 font-semibold text-4xl'>Trusted by Millions, Built for You</h2>
                       <div className='md:flex items-center gap-18'>
                         <div className='text-center space-y-4'>
                                <p className='text-gray-300'>Total Downloads</p>
                                <h3 className='font-bold text-6xl'>29.6M</h3>
                                <p className='text-gray-300'>21% more than last month</p>
                        </div>
                        <div className='text-center space-y-4'>
                                <p className='text-gray-300'>Total Reviews</p>
                                <h3 className='font-bold text-6xl'>906K</h3>
                                <p className='text-gray-300'>46% more than last month</p>
                        </div>

                        <div className='text-center space-y-4'>
                                <p className='text-gray-300'>Active Apps</p>
                                <h3 className='font-bold text-6xl'>132+</h3>
                                <p className='text-gray-300'>31 more will Launch</p>
                        </div>
                       </div>
                        
                </div>
        );
};

export default TrustedCard;