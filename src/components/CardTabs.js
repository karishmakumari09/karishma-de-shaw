import React, { useState } from 'react';
import All from './All';

const CardTabs = () => {
  const [activeTab, setActiveTab] = useState('your');


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  // <div className="tabs">
  // <div className={activeTab === 'your' ? 'active' : ''}
  //   onClick={() => handleTabChange('your')}> Your</div>
  return (
    <div>
     <nav className='nav-bar' >
          <button
          className={activeTab === 'your' ? 'active' : ''} nav-btn
          style={{border:'none',backgroundColor:'white',fontSize: '15px',marginRight:'2%'}}
          onClick={() => handleTabChange('your')}
       
        >
          Your
        </button>
        <button
          style={{border:'none',backgroundColor:'white',fontSize: '15px',marginRight:'2%',paddingBottom:'1%',borderBottom:'red'}}
          className={activeTab === 'all' ? 'active' : ''} nav-btn
          onClick={() => handleTabChange('all')}
     
        >
          All
        </button>
        <button
          style={{border:'none',backgroundColor:'white',fontSize: '15px',marginRight:'2%' }}
          className={activeTab === 'blocked' ? 'active' : ''}nav-btn
          onClick={() => handleTabChange('blocked')}
         
        >
          Blocked
        </button>

    </nav>

      <div className="card-list">
        {/* Render your card list based on the active tab */}
        {activeTab === 'your' && <YourCards />}
        {activeTab === 'all' && <All />}
        {activeTab === 'blocked' && <BlockedCards />}
      </div>
    </div>
  );
};

const YourCards = () => {
  return <h2>Your Cards</h2>;
};



const BlockedCards = () => {
  return <h2>Blocked Cards</h2>;
};

export default CardTabs;
