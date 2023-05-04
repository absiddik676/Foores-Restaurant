import React from 'react';
import Header from '../Header/Header';
import Chefs from '../Chef/Chefs/Chefs';
import ServiceQualityInfo from '../ServiceQualityInfo/ServiceQualityInfo';
import Reservation from '../Reservation/Reservation';

const Home = () => {
    return (
        <div>
            <Header/>
            <ServiceQualityInfo/>
            <Chefs/>
            <Reservation/>
        </div>
    );
};

export default Home;