import { Row, Col } from 'react-bootstrap';
import Product from './../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCarousel from '../components/ProductCarousel';

const HomeScreen = () => {
  // Using the 'useGetProductsQuery' hook from 'productsApiSlice' to fetch product data
  const { data, isLoading, error } = useGetProductsQuery();
  // Extracting the 'products' array from the fetched data, or initializing it as an empty array
  const products = data?.data?.products || [];

  return (
    <>
      <ProductCarousel />
      {isLoading ? (
        // Displaying a loading spinner if data is still being fetched
        <Loader />
      ) : error ? (
        // Displaying an error message if an error occurs during data fetching
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        // Rendering the main content if data fetching is successful
        <>
          <h1>Latest Products</h1>
          <Row>
            {/* Mapping through the 'products' array and rendering a Product component for each product */}
            {Array.isArray(products) &&
              products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  {/* Passing the product data as a prop to the Product component */}
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
