import React, {useEffect} from 'react';


import { 
    Header, 
    TollBar
} from '../../components/index';

const Home = () => {
    
    useEffect(() => {
        document.title = 'Awadmin Panel'
    });

    return (
        <div className="app">
            <Header classColor='home'></Header>
            <div className="appContent">
                <TollBar>
                    
                </TollBar>
            </div>
        </div>
    )
};

export default Home;