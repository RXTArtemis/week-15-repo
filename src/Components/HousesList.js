import React from "react";
import {House} from './House';
import { housesApi } from "../rest/HousesApi.js";
import {useEffect, useState} from 'react';


// const housesName=["Meadow Manor, Party House"];
// const houses=[];
// export class HousesList extends React.Component{
    
//     constructor (props){
//         super(props)
//         this.state = {
//             houses:['Meadow Manor', 'Yellow House'],
           
//         };

      
//     }

   
export function HousesList(){
    const[house, setHouseData]=useState(['Meadow Manor', "Yellow House"]);

    useEffect(()=>{
        getData();
    },[]);
    
    const getData =async()=>{
        const response =  await fetch('https://642e2b578ca0fe3352ca1028.mockapi.io/Houses-API')
        .then((response)=>response.json());
        setHouseData(response);
    }
    
        // componentDidMount(){
        //     this.fetchHouses();
        // };
    
        let fetchHouses = async()=>{
            const houses= await housesApi.get();
            this.setState({houses});
            console.log(houses);
        };
    
        let updateHouse = async (updatedHouse) => {
            await housesApi.put(updatedHouse);
            this.fetchHouses();
        }
    
            return(
                <div className="house-list" >
                    {house && house.map((house)=>(
                        <House
                        house={house}
                        key={house.id}
                        updateHouse={this.updateHouse}
                        />
                    ))}
                </div>
            )
         }
    




//change to useEffect
