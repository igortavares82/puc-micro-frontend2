import { useContext } from 'react';
import axios from "axios";

import Service from './super.service'
import GlobalContext from '../components/GlobalContext';

class MovieService extends Service {

    constructor(config) {
        super(config);
    }

    get(handler) {

        return this._axios
                   .get('/movie/popular')
                   .then(response => response.data.results)
                   .then(response => handler(response));
    }
}

export default MovieService;