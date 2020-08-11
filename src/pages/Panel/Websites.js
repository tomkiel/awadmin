import React, { useEffect } from "react";

import { 
    Header, 
    TollBar
} from '../../components/index';

const Home = () => {

    useEffect(() => {
        document.title = 'Awadmin Panel - Websites'
    });

    return (
        <div className="app">
            <Header classColor='websites'></Header>
            <div className="appContent">
                <TollBar>
                    
                </TollBar>
            </div>
        </div>
    )
};

export default Home;