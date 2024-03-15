const onFetchUsers = async() => {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            cache: 'no-store'
        })
        await new Promise(r => setTimeout(r, 10000))
        res = await res.json()
        
        return res
    } catch (error) {
        console.log(error)
    }
}

export default async function UserComponent(){

    const users = await onFetchUsers()

    return(
        <h5
            className="bg-gray-100"
        >
            {JSON.stringify(users).slice(0, 100)}
        </h5>
    )
}