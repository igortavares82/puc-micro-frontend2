import { useEffect } from 'react';

import config from '../config/global'
import { WindowPostMessageProxy } from 'window-post-message-proxy';
import producer from 'post-transport/src/producer';

const Home = () => {

    useEffect(() => { setTimeout(() => { producer('main-app-config', config) }, 1000) }, []);

    return (
        <>
            <iframe src="http://localhost:3001" title="Home component" />
        </>
    );
}

export default Home;