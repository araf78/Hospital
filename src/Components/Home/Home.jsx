import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
       <div>
            <div className='flex justify-center m-20'>
            <div className="mr-20">
                <h2 className="text-6xl font-bold text-blue-400 ">World Class <span className="text-6xl font-bold mr-8 text-orange-400 ">Hospital</span></h2>
                <p className="text-gray-700 mt-8 outline outline-offset-2 outline-cyan-500 rounded-md p-3 shadow-lg">Hospitals have long existed in most countries. Developing countries, which contain a large proportion of the world’s population, generally do not have enough hospitals, equipment, and trained staff to handle the volume of persons who need care. Thus, people in these countries do not always receive the benefits of modern medicine, public health measures, or hospital care, and they generally have lower life expectancies.</p>
            </div>
            <img className='rounded border-10 ' src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg"/>
        </div>
        <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-600 mb-10">Patient Reviews(3)</h2>
           

        </div>
        <Link to="/reviews" className="border-2 border-lime-600 p-2 rounded-lg text-bold bg-green-200 text-xl">See All Reviews</Link>
       </div>
    );
};

export default Home;