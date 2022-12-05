import { useEffect } from "react"

const PageTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Pixel Click Photographer`;
    },[title])
};

export default PageTitle;