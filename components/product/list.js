import React from 'react';


const ListItem = ({ image, name, description, cost, index, currency }) => {
    return (<div
        class="wrapper global-margin-auto global-margin-top-standard max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden"
    >
        <div>
            <img src={image} alt={name} />
        </div>
        <div class="p-3 space-y-3">
            <h3 class="text-gray-700 text-center font-semibold text-md">
                {name}
            </h3>
            <p class="text-sm text-gray-900 text-center leading-sm">
                {description}
            </p>
            <p class="text-sm text-center text-gray-900 leading-sm">
                ₹{cost}
            </p>
        </div>
        <button
            class="bg-teal-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500"
        >Add To Cart
        </button>
    </div>)
}

const List = ({ products }) => {
    return(<div class="flex flex-wrap">
        {products.map((product, index) => {
        return (
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
                <ListItem {...product} index={index} />
            </div>)
        })
      }
        </div>);
}
export default List;