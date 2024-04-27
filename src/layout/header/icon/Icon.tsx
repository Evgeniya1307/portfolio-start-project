import React from "react";
import iconsSpriter from'../../../assets/images/icons-spriter.svg'
type IconPropsType={
    iconId:string
}

export const  Icon =(props:IconPropsType)=>{
    return(

        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<use xlinkHref={`${iconsSpriter}#${props.iconId}`}/>
</svg>
    )
}