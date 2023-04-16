import React from 'react';
import {NewRoomForm} from './NewRoomForm';

// const room=[];
export const House= (props)=> {
    const {house, updateHouse} = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    } 
    //fix error on line 16
    // const addNewRoom = (room) =>  updateHouse({...house, rooms: [...house.rooms,room]});
    const addNewRoom = (room) => {
        //generate random index
        let randomIndex = Math.floor(Math.random() * house.rooms.length);
        //check if existing room id matches the randomIndex and if it does increment until it does not match
        while (house.rooms.some((x) => x._id === randomIndex)) {
         if(randomIndex++ <=100)
          console.log("randomIndex:", randomIndex);
        }
    
        const updatedHouse = {
          ...house,
          rooms: [
            ...house.rooms,
            {
              _id: randomIndex,
              name: room.name,
              area: room.area,
            },
          ],
        };
        return updateHouse(updatedHouse);
    }

    console.log(house);
    
    const rooms = () => (!house.rooms) ? <p>No rooms yet</p>:(
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label>{`${room.name} Area: ${room.area}`}</label>
                    <button onClick={(e)=> deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1 key={house._id}>{house.name}</h1>
            {
            rooms({rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};

export default House;