import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/OMDBWrapper.js';

let returnObject = await OMDBSearchComplete("cars");
console.log(returnObject);