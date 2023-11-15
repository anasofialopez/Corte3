import { useEffect, useState } from "react"
import {getGifs} from "../helpers/getGifs";


export const GifGrid =({category}) => {
    const [images, setimages] = useState([]);

    const getImages= async () => {
        const images = await getGifs (category)
        setimages (images);
    }

    useEffect(()=> {
        getImages();
    }, [])

    return {
        images: images,
        isLoading: false
    }

}
