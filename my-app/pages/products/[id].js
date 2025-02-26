// pages/product/[id].js
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

const ProductDetail = ({ product }) => {
    const router = useRouter();
    const { id } = router.query;

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className='main flex col-flex'>
            <h1>{product.name}</h1>
            <p>Id : {product.id}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
    
        </div>
    );
};

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const jsonData = fs.readFileSync(filePath);
    const products = JSON.parse(jsonData);

    const paths = products.map(product => ({
        params: { id: product.id.toString() }
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const jsonData = fs.readFileSync(filePath);
    const products = JSON.parse(jsonData);
    const product = products.find(p => p.id === parseInt(params.id));

    return {
        props: { product }
    };
}

export default ProductDetail;
