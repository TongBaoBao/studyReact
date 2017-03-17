'use strict';
export const ADD = 'ADD';

const axios  = require('axios');


// export function addFromData() {
//
//     return ( dispatch ) => {
//         axios.get('./data.json')
//             .then(res => {
//             console.log(res);
//         dispatch(add(res.data[0].text));
//     });
//     }
// }

export function add(text) {
    return {
        type: ADD,
        text
    };
}