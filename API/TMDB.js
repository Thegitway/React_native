
const apiToken="5abac974c69600145236361d229c53a3"


export function getVideo(idFilm)
{
  const url="https://api.themoviedb.org/3/movie/"+idFilm+"/videos?api_key="+apiToken;
  return  fetch(url)
  .then((response)=>response.json())
  .catch((error)=>console.log(error))
}
  export function getFilm(text,page)
{
    const url="https://api.themoviedb.org/3/search/movie?api_key="+apiToken+"&language=en&query="+text+'&page='+page;
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
}

 export function getImage(name)
{
return 'https://image.tmdb.org/t/p/w500'+name
}

export function getFilmById(id)
{
  const url="https://api.themoviedb.org/3/movie/"+id+"?api_key="+apiToken+"&language=en";
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))
}

