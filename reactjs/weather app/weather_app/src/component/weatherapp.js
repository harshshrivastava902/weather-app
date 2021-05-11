import {useState,useEffect} from "react";
import "./css/style.css"








const Weatherapp = () =>
{
    

    
    const[city,setCity]=useState(null);
    // const[coord,setCoord]=useState(null);
    const[image,setImage]=useState(null);
    const[search,setSearch]=useState("pune");
    const[data,setData]=useState(null);
    const[location,setLocation]=useState(null);
    const[time,setTime]=useState(null);
    const[icon,setIcon]=useState(null);
    // const[latti,setLatti]=useState(null);
    // const[long,setLong]=useState(null);
    const[weather,setWeather]=useState(null);
    const[current,setCurrent]=useState(null)
  
useEffect( ()=>
    {
    const fetchApi = async ()=>
    {
       
        
         
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2731da656112521a0eab4fbdb9810f69`;
            const res=await fetch(url);
            const resJson=await res.json();
            setCity(resJson.main);
           
     
      
    
        
         const url2=`https://api.weatherapi.com/v1/current.json?key=1efa3f631be149d39e275156213004&q=${search}&aqi=no`
         const res2=await fetch(url2);
         const resJson2=await res2.json();
         setLocation(resJson2.location);
         setCurrent(resJson2.current);
         console.log("sec")

         
     }
 
  
    
         
    fetchApi();
    // fetch_time();
   
   
  
    
    
    
},[search]
    )
  

 

useEffect(()=>
{
        
const getNewImage = async ()=> {

  
   var url2="";
    if(search!=="")   {
       url2=`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=IxGiYtE-yfergHMIOeB2RMki-FdhYCbiEWLsSsjuILk`
    }
else{
     url2=`https://api.unsplash.com/search/photos?page=1&query=rain&client_id=IxGiYtE-yfergHMIOeB2RMki-FdhYCbiEWLsSsjuILk`

 }
    


const imgres=await fetch(url2);
const imgjson= await imgres.json();
var results=imgjson.results;
// let randomNumber = Math.floor(Math.random() * 1);

setImage(imgjson.results[1].urls.small);

  
    
}

getNewImage();

} )

 
 
  


    return(
    <>

<div class="canvas">
	<div class="cloud"></div>
	<div class="cloud a"></div>
	<div class="cloud b"></div>
	<div class="cloud c"></div>
	{/* <div class="land">
        
		<div class="tree"></div>
		<div class="tree a"></div>
		<div class="tree b"></div>
		<div class="tree c"></div>
		<div class="tree d"></div>
	</div> */}
	<div class="star"></div>
	<div class="star a"></div>
	<div class="star b"></div>
	<div class="star c"></div>
	<div class="star d"></div>
	<div class="wind"></div>

	<div class="eclipse">
		<div class="sun"></div>
		<div class="sun a"></div>
		<div class="moon"></div>
		<div class="moon a"></div>
	</div>
    
    <div className="box">

        <div className="inputData">
                
                <input
                type="text"
                className="inputField"
               //event handler
                    onChange={(event)=>{
                    setData(event.target.value)}
                    }
                />
                
 
                <button id="button_click" onClick={()=>
                {
                    setSearch(data);
                }
             
             }><i class="fas fa-search"></i></button>

    
          </div>
            
         
        
    
         <div className="image_place" > <img src={image} alt="" id="image"/></div>
            {!city ? (
                <div className="error_msg">
        <p id="errormsg">{search} CITY NOT FOUND</p><div className="blank"></div>
        </div>): (

            <div className="info">
                
                 
         
                 {!current ? (
                <div className="error_msg">
        <p id="errormsg">{search} CITY NOT FOUND</p><div className="blank"></div>
        </div>):(<div className="weather-desc"><div><img src={current.condition.icon} id="icon" /></div>
            {current.condition.text}</div>)
          }
          
            <h1 className="location">
            <i class="fas fa-street-view"></i>
                {search}
            </h1>
            {!location ? (
                <div className="error_msg">
        <p id="errormsg">{search} CITY NOT FOUND</p><div className="blank"></div>
        </div>):(<div className="loc-time"><h2>{location.localtime}</h2></div>)
          }
            <h2 className="temp">
            {city.temp} &#8451;
            </h2>
            <h3 className="tempmin_max">max:{city.temp_max} &#8451; | min:{city.temp_min} &#8451;</h3>
            
        </div>
        
    )}
        
       
       </div>
</div>

    
    
          
    
           
            
       
      
      
     </>
      
    )

}
export default Weatherapp;