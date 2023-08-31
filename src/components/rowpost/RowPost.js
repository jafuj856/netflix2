import React, { useEffect,useState } from 'react'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constence/const'
import YoTube from 'react-youtube'
import axios from '../../axios'

function RowPost(props) {
 const [movies,setMovies] = useState([])
 const [movieUrl,setMuvieUrl] = useState()
  useEffect(() => {
        axios.get(props.url).then(responce=>{
       //   console.log(responce.data.results)
          setMovies(responce.data.results)
        }).catch(err=>{
        //  alert('network error')
        })
          })

          const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
        
          const handleMvie = (id)=>{
              console.log(id)
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

  return (
    <div className='row'>
        <h2 style={{marginLeft:'20px',marginTop:'10px'}}> {props.title}</h2>
        <div className='row_posters'>
        {movies.map((obj)=>
        <img onClick={()=>handleMvie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${obj ? imageUrl+obj.backdrop_path : ""}`} alt="poster" />
        )}
           </div> 
        {movieUrl && <YoTube opts={opts} videoId={movieUrl} style={{display:"flex",justifyContent:"center",width:"100%"}}/>}
    </div>
  )
}

export default RowPost

//movie/movid/videos