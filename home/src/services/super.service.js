import axios from "axios"

class Service {

    constructor(config) {
        
        if (config === undefined || Object.keys(config).length === 0)
            return;

        this._axios = axios.create({
            baseURL: config?.api?.themoviedb.address,
            headers: {
                Authorization: `Bearer ${config?.api?.themoviedb.token}`
            }
        });
    }
}

export default Service;