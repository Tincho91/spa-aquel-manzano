import { useEffect, useState } from 'react';
import { fetchFromFirestore } from '../dataBase/firebaseConfig'
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ItemMap from './ItemMap';
import Spinner from 'react-bootstrap/Spinner';


export const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { categoryId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
      setIsLoading(true);
      fetchFromFirestore()
        .then(result => {
          if (categoryId) {
            result = result.filter(item => item.category == categoryId);
          }
          setDatos(result);
          setIsLoading(false);
        })
        .catch(err => console.log(err))
    }, [categoryId])

    if (isLoading) {
      return(
          <Container className="loadingContainer vh-100">
              <Spinner className="loading" animation="grow" role="status"> 
                  <span className="visually-hidden">Loading...</span>
              </Spinner>
          </Container>
      )
    };

    return (
      <>
        <Container className="item-container d-flex">
          <Row>
            <ItemMap className="" datos={datos} />
          </Row>
        </Container>
      </>
    );
}