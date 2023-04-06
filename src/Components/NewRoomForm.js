import React, {useState} from "react";

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState('');

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
            <form onSubmit = {onSubmit}>
                <input
                type='text'
                placeholder='name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
               
                />
                <input
                type='text'
                placeholder='area'
                value={area}
                onChange={handleAreaInput}
                
                />
                <button type='submit'>Add Room</button>
            </form>
        </div>
    )
}

export default NewRoomForm;
