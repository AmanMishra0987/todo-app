import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from '../features/employeesSlice';
import { motion } from 'framer-motion';


const EmployeeList = () => {
  const { data: products, status } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error fetching employees.</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="product-item"
          >
            <h2>{product.name}</h2>
            <p><strong>Product ID:</strong> {product.id}</p>
            {product.data ? (
              <div>
                <h3>Details:</h3>
                <ul>
                  {Object.entries(product.data).map(([key, value], dataIndex) => (
                    <li key={dataIndex}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No additional details available.</p>
            )}
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
