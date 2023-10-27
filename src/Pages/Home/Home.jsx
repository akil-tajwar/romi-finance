import React from 'react';
import Banner from './Elements/Banner';
import Highlighting from './Elements/Highlighting';
import Tokens from './Elements/Tokens';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Highlighting/>
            <Tokens/>
        </div>
    );
};

export default Home;