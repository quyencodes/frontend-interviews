import React, {useState} from 'react';

interface Props {}
export default function AddItem({addTask}: Props) {
    const [input, setInput] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input)
    }    
    
    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }
    
    return <form onSubmit={handleSubmit} className="flex justify-center m-8">
        <input onChange={handleChange} className="border-gray-600 border-2 rounded-lg p-1" type="text" placeholder="Add task"></input>
        <button type="button" className="p-2 border-gray-600 border-2 rounded-lg">Submit</button>
    </form>
}