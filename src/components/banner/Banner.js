import React,{useState,useEffect} from 'react'
import {API_KEY,imageUrl} from '../../constence/const'
import './Banner.css'
import YoTube from 'react-youtube'
import axios from '../../axios'
function Banner() {
  
   const  [movie,setMovie] = useState();
   const [movieUrl,setMuvieUrl] = useState()
  useEffect(()=>{
    
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((respons)=>{
       
        setMovie(respons.data.results.sort(function(a,b){return 0.5-Math.random()})[0])
        
      })
    },[])
    console.log(movie)
     
    const opts = {
      height: '488px',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

   const movieHandel=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(respons=>{
           
      if(respons.data.results.length!==0){
           
            setMuvieUrl(respons.data.results[0].key)
      }else{
        console.log('array is empty')
      }
     }).catch(err=>{
      console.log(err)
     })
    }
    var closeYt=()=>{
         setMuvieUrl(null)
    }
  
  return (  
          
     
     <div  style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>


      {movieUrl ? <div> <YoTube opts={opts} videoId={movieUrl}/> 
      <div className='clos'><button onClick={()=>closeYt()} className="close-button" >
    <span>&times;</span>
  </button></div> </div>
      : <div className='content'>
        
       

        <h1 className='titel'>{ movie ? movie.title :""}</h1>
               <div className='banner_buttons'>
           <button onClick={()=>movieHandel(movie.id)} className='button'>Play</button>
           <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview :""}</h1>
       </div>}
       <div className='fade_bottom'></div>
    </div>
  )

}

export default Banner
