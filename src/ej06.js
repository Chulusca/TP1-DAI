let miUrl = null;
let miObjeto = null;

miUrl = 'ayo';
miObjeto = parsearUrl (miUrl);

console.log(miObjeto);

function parsearUrl(laURL){
    try{
    const Obj = new URL(laURL);

    const miObj={
        host: Obj.host,
        pathname: Obj.pathname,
        parametros: Obj.searchParams
    };
        return miObj;
    } catch(error){
        console.error("Error al parsear la URL: ", error);
        return {};
    }

}