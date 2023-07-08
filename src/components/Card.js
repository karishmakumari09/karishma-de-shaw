import React from 'react';
import '../App.css';
import { FaFireAlt} from 'react-icons/fa';
 import { PiArrowsClockwiseBold} from 'react-icons/pi';

import { GoDotFill} from 'react-icons/go';

const Card = (props) => {
  return (
    <div className="card">
      <div className='card-header'>
        <div>
          <h2> {props.data.name}</h2>
          <p>Memberfive . Budget</p>
        </div>
        <div className="card-header-icon" >
        <p className='card-header-img' >{props.data.card_type==="burner"?<FaFireAlt style={{color:'#F29727',backgroundColor:'#FAF0E4',width:'1.2cm',height:'1.2cm',padding:'50% 50% 50% 50%',borderRadius:'25cm'}}/>:<PiArrowsClockwiseBold style={{color:'FF2171',backgroundColor:'FCE9F1',width:'1.2cm',height:'1.2cm',padding:'50% 50% 50% 50%',borderRadius:'25cm'}}/>}</p>
        </div>
       
      </div>
      <div className='card-mid row' >
        <div className="card-mid-col col">
          <div className='row'>
            <p>AMOUNT</p>
          </div>
          <div className='row'>
          <p><strong>300 SGD</strong></p>
            {/* <h5>300 SGD</h5> */}
          </div>

        </div>
        <div className="card-mid-col col">
          <div className='row'>
            <p>FREQUENCY</p>
          </div>
          <div className='row'>
            <p><strong>Monthly</strong></p>
            {/* <h5></h5> */}
          </div>

        </div>
        <div className="card-mid-col col">
          <div className='row'>
            <p>EXPIRY</p>
          </div>
          <div className='row'>
          <p><strong>21July 2021</strong></p>
            {/* <h5>21July 2021</h5> */}
            
          </div>

        </div>
      
      </div>
      
      <div class="card-graph">
        <div class="row">
        <div>
          <p style={{color:'green',height:'0.25cm',borderRadius:'2cm',backgroundColor:'green',width:`${props.data.spent.value*100/(props.data.spent.value+props.data.available_to_spend.value)}%`}}></p>

         
        </div>
        </div >

      </div>
      <div className='card-spent row'>
         
          <div class="col" >
          <p>< GoDotFill style={{color:'green'}}/>Spent</p>
          </div>
      
          <div class="col" style={{justifyContent:'right',marginLeft:'auto'}}>
            <p><strong>{props.data.spent.value} {props.data.spent.currency}</strong></p>
          </div>
         
         
      </div>
      <div className='card-spent row' >
      
          <div class="col">
          <p>< GoDotFill style={{color:'red'}}/>Balance</p>
          </div>
          
          <div class="col" style={{justifyContent:'right',marginLeft:'auto'}} >
          <p><strong>{props.data.available_to_spend.value} {props.data.available_to_spend.currency}</strong></p>
          </div>
      
      
      </div>
      
      
    </div>
  );
};

export default Card;
