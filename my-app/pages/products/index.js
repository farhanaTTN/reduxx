// pages/products.js
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function getStaticProps() {
    try {
        const filePath = path.join(process.cwd(), 'data', 'products.json');
        const jsonData = await fs.promises.readFile(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        return { props: { products: data } };
    } catch (error) {
        console.error("Error reading products.json:", error);
        return { props: { products: [] } };
    }
}

export default function Products({ products }) {
  return (
    <div className='main flex col-flex'>
      <h1 id='product'>Products</h1>
      <ul >
        {products.map(product => (
          <div className='product-card'>
              <li  key={product.id}>
              <Link href= {`products/${product.id}`} ><h2 className='link'>{product.name}</h2></Link>
              <p>Id : {product.id}</p>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
