import React from 'react';
import { Spinner } from './Spinner';
import { Products } from './Products';
const Home = ({Data,Loading}) => {


  return (
    <div>
      {
        Loading ? <Spinner /> : <Products Data={Data} />
      }
    </div>
  )
}
export default Home;
