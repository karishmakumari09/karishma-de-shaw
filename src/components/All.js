import React from 'react';
import mock from '../mock.json';
import Card from './Card';
import '../App.css';
import { BiSearch } from 'react-icons/bi';
import { BsFilter} from 'react-icons/bs';

// import filter from '../../public/filter.png';

const All = () => {
    return (
        <div>
            <div className='all-filter'>
             <div style={{justifyContent:'right',marginLeft:'auto'}}>
              <BiSearch style={{marginRight:'10px'}}/>
              
              <button class="btn  " style={{backgroundColor:'#eeeeee',color:'black',border:'none',height:'200%',borderRadius:'0.25cm'}} > <BsFilter/> Filter</button>  
             </div>
           
            
             

              

            </div >
            <div className="cards-grid">
        
              {mock.data.map((data1) => (
              <Card data={data1} />
               ))}
      
            </div>
        </div>
      
      );
};
export default All;