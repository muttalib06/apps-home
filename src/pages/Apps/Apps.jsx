import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../../Components/App/App';

const Apps = () => {
        const apps = useLoaderData();
        console.log(apps)
        return (
                <div  className=" md:max-w-[80%] md:mx-auto text-center mt-10">
                        <h2 className="text-5xl font-bold my-3">Our All Applications</h2>
                        <p className="text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>

                        <h4 className='md:text-left font-semibold md:text-2xl'>({apps.length}) Apps Found</h4>

                        <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-4 auto-rows-fr mx-3 md:mx-0">
                                {apps.map(app => <App key={app.id} app={app}></App>)}
                        </div>
                        
                        
                </div>
        );
};

export default Apps;