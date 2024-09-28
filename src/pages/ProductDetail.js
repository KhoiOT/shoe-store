
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price} USD</p>
          <p>{product.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
