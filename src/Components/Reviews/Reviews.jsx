import React from 'react';
import useInstument from '../Hooks/Hook';
import Instument from '../Instument/Instument';

const Reviews = () => {
    const  [instuments, setInstument] = useInstument();

    return (
        <div>
             <div className="grid grid-cols-3 gap-4 p-5 border-2">
             {
                instuments.map(instument => <Instument
                key={instument.id}
                instument={instument}
                ></Instument>)
            }
             </div>
        </div>
    );
};

export default Reviews;