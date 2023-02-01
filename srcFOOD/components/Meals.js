import React, { useState } from 'react';
import Mealitem from './Mealitem';


const Meal=()=> {
    const[search, setSearch] = useState("");
    const[Mymeal, setMeal] = useState();
    const searchMeal=(evt)=>{
        if(evt.key=="Enter" ){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                setMeal(data.meals)
            })

        }
    }



    return(
        <div className='main'>
            <div className='heading'>
                <h1>Search Your Food Receipe</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum voluptas porro quisquam harum corporis necessitatibus id reprehenderit error ipsam, fuga minus, numquam itaque. Eaque facilis magni quaerat sint porro.</h4>  
            </div>
            <div className='searchBox'>
                <input type='search' className='search-bar' placeholder='Enter food name' onChange={(e)=>setSearch(e.target.value)}  value={search} onKeyPress={searchMeal}/>

            </div>
            <div className='container'>

                {
                    (Mymeal==null) ? <p>Not Found</p> : Mymeal.map((res)=>{
                        return(
                            <Mealitem data={res} />
                        )
                    })
                }

                
                
            </div>

        </div>
    )
}

export default Meal;