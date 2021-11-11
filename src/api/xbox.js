import axios from "axios";

require('dotenv').config();

export async function getXboxSeriesXData() {
    const results = await axios({
        'method':'GET',
        'url':process.env.REACT_APP_URL,
        'headers':
            {
                'x-rapidapi-host':process.env.REACT_APP_HOST,
                'x-rapidapi-key':process.env.REACT_APP_KEY
            },
        'params':
            {
                country: 'US',
                asin: 'B08H75RTZ8',
                page: '1'
            },
    });
    return results.data.results;
}

export default getXboxSeriesXData;
