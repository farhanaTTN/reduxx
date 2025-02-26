// // pages/about/[id].js

import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

const EmployeeDetail = ({ about }) => {
    const router = useRouter();
    const { id } = router.query;

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className='main flex col-flex'>
            <h1>{ about.name }</h1>
            <p>Position: { about.position }</p>
            <p>{ about.description }</p>
        </div>
    );
};

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'data', 'about.json');
    const jsonData = await fs.promises.readFile(filePath, 'utf-8');
    const aboutEmployees = JSON.parse(jsonData);

    const paths = aboutEmployees.map(about => ({
        params: { id: about.id.toString() }
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'data', 'about.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const employees = JSON.parse(jsonData);
    const employee = employees.find(emp => emp.id === parseInt(params.id));

    return {
        props: { about: employee }
    };
}

export default EmployeeDetail;
