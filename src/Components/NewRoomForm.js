import React, {useState} from "react";

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState('');
//figure out if undefined goes with useState like in the video

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int: '');
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(name && area){
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        }else{
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new room</h4>
            <form onSubmit = {(e)=> onSubmit(e)}>
                <input
                type='text'
                placeholder='name'
                onChange={(e)=> setName(e.target.value)}
                value={name}
                />
                <input
                type='text'
                placeholder='area'
                onChange={(e)=> handleAreaInput(e)}
                value={area}
                />
                <button type='submit'>Add Room</button>
            </form>
        </div>
    )
}

export default NewRoomForm;
