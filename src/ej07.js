import {getCurrencyAbbreviation, getCountryByAbbreviation} from 'currency-map-country';

let monedaDelPais, codigoPais;
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigo){
    if(getCurrencyAbbreviation(getCountryByAbbreviation(codigo)) == null){
        return null
    }
    return getCurrencyAbbreviation(getCountryByAbbreviation(codigo));
}