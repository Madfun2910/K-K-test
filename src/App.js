import React, {useState} from "react";
import './App.css';
import {Button} from "./componets/Button";


function App() {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(1)

    const mainButtonHandler = () => {
        setEditMode(!editMode)
    }
    const valueButtonHandler = (e) => {
        setValue(e.target.value)
        setEditMode(false)
        console.log(e.target.value) // Значения в консоль по таргету
    }

    return (
        <div className="App">
            <Button onClick={mainButtonHandler} value={value}/>
            {editMode ?
                <div onClick={valueButtonHandler}>
                    <Button value={1}/>
                    <Button value={2}/>
                    <Button value={3}/>
                </div> : null
            }
        </div>
    );
}

export default App;
