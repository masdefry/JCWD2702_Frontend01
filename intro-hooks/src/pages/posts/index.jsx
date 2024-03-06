
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Posts(){
    const [data, setData] = useState(null)

    const onFetchData = async() => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(res.data) // [{}]
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onFetchData()
    }, [])

    if(data === null) return <h1>Loading...</h1>

    return(
        <div>
            <h1>
                Posts 
            </h1>
            {data.map((item, index) => {
                return(
                    <div key={index}>
                        {item.title}
                    </div>
                )
            })}
        </div>
    )
}