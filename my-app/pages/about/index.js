// // pages/about.js

import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const About = ({ employees }) => {
  return (
    <div className="main flex col-flex">
      <div id='About'>
        <h1>About Our Company</h1>
        <p>We are a leading company in providing innovative solutions to our clients. Our team is dedicated to achieving excellence in every project we undertake.</p>
      </div> 
      <h2>Our Employees</h2>
      <div className="employees">
        {employees.map(employee => (
          <div className='employee-card'>
            <li  key={employee.id}>
            <Link href= {`about/${employee.id}`} ><h3  className='link'>{employee.name}</h3></Link>
            <p>Id : {employee.id}</p>
            <p>Position: {employee.position}</p>
            <p>{employee.description}</p> </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'about.json');
  const jsonData = await fs.promises.readFile(filePath, 'utf-8');
  const employees = JSON.parse(jsonData);

  return {
    props: { employees },
  };
}

export default About;
