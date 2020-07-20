import React from 'react';


const ListItem = ({image,name,description,cost,index,currency}) =>{
    return <div>{name}</div>
}

const List = ({products}) => {
        return products.map((product,index) => <ListItem {...product} index={index}/>)
}
export default List;