import { useEffect, useState } from 'react';
import { fetchFromFirestore } from '../dataBase/firebaseConfig';
import { useParams } from 'react-router-dom';
import ItemDetailMap from './ItemDetailMap';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';


export const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const itemId = useParams();
    

    useEffect(() => {
        setIsLoading(true);
        let itemIdToFetch = itemId.itemId;
        fetchFromFirestore()
          .then(response => {
            if (itemIdToFetch) {
              response = response.filter(item => item.id == itemIdToFetch);
            }
            setDatos(response);
            setIsLoading(false);
          })
          .catch(error => console.log(error))
      }, [itemId.itemId])

    if (isLoading) {
        return(
            <Container className="loadingContainer vh-100">
                <Spinner className="loading" animation="grow" role="status"> 
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        )
    };

    return(
        <ItemDetailMap className="item-detail" datos={datos}/>
    )
}