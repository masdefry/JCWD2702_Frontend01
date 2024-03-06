import { useState } from "react"

export default function Note(){
    const [types, setTypes] = useState('')
    const [error, setError] = useState('')

    const onSetTypes = (e) => {
        const inputText = e.target.value // eb

        if(inputText.length >= 15){
            setTypes(inputText) // eb
            setError('')
        }else{
            setError('Maximun Character is 15')
        }
    }

    return(
        <div style={{ marginLeft: '100px' }}>
            {types}
            <br />
            <textarea 
                placeholder="Type Anything..."
                onChange={(e) => onSetTypes(e)}
            />
            <br />
            {error}
        </div>
    )
}