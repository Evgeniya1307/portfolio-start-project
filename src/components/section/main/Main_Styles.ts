import styled from "styled-components";


type PhotoPropsType ={
    src: string;
    alt: string;
}



// Styling for the main container
const Main = styled.div`
    min-height: 100vh;
    background-color: #364338;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

// Styling for the Photo component
const Photo = styled.img<PhotoPropsType>`
    width: 350px;
    height: 430px;
    object-fit: cover;
    border-radius: 8px;  // Added border-radius for rounded corners
    box-shadow: 0 4px 8px rgba(246, 244, 244, 0.1);  // Added shadow for depth
`;

const MainTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #e4e2ee;  // Example of a color that stands out
    margin-top: 12px;
`;


const Name = styled.h2`
    margin-top: 8px;
    font-size: 2rem;
    color: #f1ecec;
`;

const SmallText = styled.h2`
    
    
`


export const S = {
    Main,
    Photo,
    MainTitle,
    Name,
    SmallText
}