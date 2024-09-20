import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ book }) => {
    const navigate = useNavigate();
    return (
        <div className=' flex'>
            {book?.length ? book?.map((el, indx) => {
                return (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg m-8" key={el?._id}>
                        <img className="w-[300px] h-[180px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWzz0VUwRT59_gOarY12lF-5BAocDBp-e3w&s" alt={el?.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Title: {el?.title}</div>
                            <p className="text-gray-700 text-base">
                                Published Year: {el?.year}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">By-{el?.author}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{el?.genre}</span>
                        </div>
                        <button class="bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=> navigate(`/update/${el?._id}`) }>
                            Edit
                        </button>
                    </div>
                )

            }) : <h3>No Books Data Available Right Now</h3>}
        </div>
    )
}

export default Card
