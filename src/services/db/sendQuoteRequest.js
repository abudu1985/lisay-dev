import axios from 'axios';

const apiUrl = process.env.REACT_APP_FIREBASE_QUOTE_API;

const sendQuoteRequest = async (url, method, data, token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
    return new Promise(async(res, rej) => {
        try {
            const resp = await axios({
                method,
                url: `${apiUrl}${url}`,
                data,
            });
            res(resp.data)
        } catch (err) {
            console.error('requests error -> ', err);
            rej(err)
        }
    })
};

export default sendQuoteRequest;