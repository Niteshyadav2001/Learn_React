import React from 'react'

function Card({ Title = "Name of user", Description = "Description of above person in above photograph"
    , Button = "Click me", img = "https://tinyurl.com/5dnn6heu" }) {
    return (
        <>
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <img className="w-full h-80 object-cover" src={img} alt="Card Image" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{Title}</h2>
                    <p className="text-gray-600 mt-2">{Description}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">{Button}</button>
                </div>
            </div>
        </>

    )
}
export default Card