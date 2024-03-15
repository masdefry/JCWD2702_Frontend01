
const onFetchPosts = async() => {
    try {
        let res = await fetch('http://localhost:5000/products', {
            method: 'GET',
            cache: 'force-cache', // no-store, force-cache, 
            // next: {
            //     revalidate: 10
            // }
        })
        res = await res.json()
        
        return res
    } catch (error) {
        console.log(error)
    }
}

const FetchingPage = async() => {

    const products = await onFetchPosts()
    console.log(products)
    return(
        <div className="px-32">
            <h1>
                Fetching Page in NextJS
            </h1>
            {
                products?.map((item, index) => {
                    return(
                        <h5 key={index}>
                            {item.name}
                        </h5>
                    )
                })
            }
        </div>
    )
}

export default FetchingPage;