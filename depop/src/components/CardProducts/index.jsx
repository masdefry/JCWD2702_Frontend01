import { CiHeart } from "react-icons/ci";
const CardProducts = ({
    image,
    price,
    brand, 
    size
}) => {
    return(
        <>
            <div>
                <div className="relative w-full h-[300px] bg-red-100">
                    <img 
                        src={image}
                        width={'100%'}
                        height={'100%'}
                        className="max-w-full min-h-full object-cover"
                    />
                    <CiHeart 
                        color='white'
                        size={50}
                        className="absolute bottom-0 right-0"
                    />
                </div>
                <h1
                    className="font-bold text-xl"
                >
                    {price}
                </h1>
                {
                    size?.map((size, index) => {
                        return(
                            <h1
                                className="text-xl"
                            >
                                {size.size}
                            </h1>
                        )
                    })
                }
                <h1
                    className="text-xl"
                >
                    {brand}
                </h1>
            </div>
        </>
    )
}

export default CardProducts;