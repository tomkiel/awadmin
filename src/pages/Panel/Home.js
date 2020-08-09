import React from 'react';
import { 
    Header, 
    TollBar
} from '../../components/index';

const Home = () => {
    return (
        <div className="app">
            <Header></Header>
            <div className="appContent">
                <TollBar>
                    
                </TollBar>
            </div>
        </div>
    )
};

export default Home;