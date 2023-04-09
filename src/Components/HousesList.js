import React from "react";
import {House} from './House';
import { housesApi } from "../rest/HousesApi.js";
import {useEffect, useState} from 'react';
import './background.css';



const houses={
    house1Name:'Meadow Manor', 
    house2Name:'Red House'};
const houseProperties= Object.values(houses);
console.log(houseProperties);

export class HousesList extends React.Component{
    constructor (props){
        super(props)
        this.state = {
          houses:[]
          
        };
    }

   
//change to useEffect
// useEffect(()=>{
//     getData();
// },[]);

    componentDidMount(){
        this.fetchHouses();
    };

    fetchHouses = async()=>{
        const houses= await housesApi.get();
        this.setState({houses});

    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    render(){
        return(
            <div className="house-list"  >
                {houseProperties.map((house, index)=>(
                    
                    <House className='items'
                    house={house}
                    houseName={this.houseName}
                    key={index}
                    updateHouse={this.updateHouse}
                    />
                ))}
             
            </div>
        )
    }
}

