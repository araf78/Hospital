import React from 'react';
import Instument from '../Instument/Instument';

const Reviews = () => {
    const  allInstuments = [
        {
          "id": "0",
          "review": " joss full body checkup",
          "picture": "http://placehold.it/32x32",
          "ratings": 4.20,
          "name": "Shahin Hossain"
        },
        {
          "id": "1",
          "review": " very good report",
          "picture": "http://placehold.it/32x32",
          "ratings": 3.5,
          "name": "Abdullah Al Fahim"
        },
        {
          "id": "2",
          "review": "good output",
          "picture": "http://placehold.it/32x32",
          "ratings": 4.5,
          "name": "Shamim Hossain"
        },
        {
          "id": "3",
          "review": "awesome looking",
          "picture": "http://placehold.it/32x32",
          "ratings": 4.7,
          "name": "Arafath Arefin"
        },
        {
          "id": "5",
          "review": "perfect output",
          "picture": "http://placehold.it/32x32",
          "ratings": 4.8,
          "name": "Sajjad Hoassain"
        },
        {
          "id": "6",
          "review": "clearfull",
          "picture": "http://placehold.it/32x32",
          "ratings": 4.9,
          "name": "Redoan Ehsan"
        }
      ];

    return (
        <div>
             <div className="grid grid-cols-3 gap-4 mt-20">
             {
                allInstuments.map(instument => <Instument
                key={instument.id}
                instument={instument}
                ></Instument>)
            }
             </div>
        </div>
    );
};

export default Reviews;