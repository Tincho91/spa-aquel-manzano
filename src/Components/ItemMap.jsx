import Item from './Item';


const ItemMap = (props) => {
    
    return (
        <>
        {
            props.datos.map( item => 
            <Item 
                key = {item.key}
                id = {item.id}
                name = {item.name}
                description = {item.description}
                price = {item.price}
                category = {item.category}
            />
            )
        }
        </>
    )
}

export default ItemMap;