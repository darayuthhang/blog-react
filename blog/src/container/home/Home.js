

import React from 'react';
import Header from '../../components/page-app/Header';
import Section from '../../components/page-app/Section';

//bg-light-${appLists.color} dib br3 pa3 ma2 grow bw2 shadow-5
const Home = () => {
    return (
      <div className="tc">
        <Header />
        <Section />
      </div>
    );
}


export default Home;