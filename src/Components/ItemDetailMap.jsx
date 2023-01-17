import ItemDetail from "./ItemDetail";

const ItemDetailMap = (props) => {
    
    return (
        <>
        {
            props.datos.map( item => 
            <ItemDetail
                key = {item.key}
                id = {item.id}
                name = {item.name}
                description = {item.description}
                price = {item.price}
                category = {item.category}
                stock = {item.stock}
                images = {item.images}
                //brand = {item.brand}
                //material = {item.material}
                //dimentions = {ite.dimention}
                //models = {item.models}
            />
            )
        }
        </>
    )
}

export default ItemDetailMap;