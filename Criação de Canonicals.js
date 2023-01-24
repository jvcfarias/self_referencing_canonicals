window.onload = function ()
{
    //Caso seja referenciando a mesma url
    var elemento_canonical = document.createElement('link');

    //Adicionar canonical nova
    elemento_canonical.setAttribute('rel', 'canonical');

    try 
    {
        //Self-canonical
        elemento_canonical.setAttribute('href', window.location.href);

        //Remover canonical atual
        document.querySelector('link[rel="canonical"]').remove();
        document.getElementsByTagName('head')[0].appendChild(elemento_canonical);
    } 
    
    catch (e) 
    {
        console.error(e); 
    }
}