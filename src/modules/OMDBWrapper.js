import axios from "axios";

const apiKey = '11f72b82';
const apiUrl = 'http://www.omdbapi.com/?';

OMDBSearchByPage(1, 1);

const OMDBSearchByPage = async (searchText, page = 1) => {

    let returnObject = {
    respuesta : false,
    cantidadTotal : 0,
    datos : {}
};

};

const OMDBSearchComplete = async (searchText) => {

    let returnObject = {
    respuesta : false,
    cantidadTotal : 0,
    datos : {}
};

// No seas vago, acá hay que hacer el cuerpo de la función!!!

return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
    respuesta : false,
    cantidadTotal : 0,
    datos : {}
};

// No seas vago, acá hay que hacer el cuerpo de la función!!!

return returnObject;
};

// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};
