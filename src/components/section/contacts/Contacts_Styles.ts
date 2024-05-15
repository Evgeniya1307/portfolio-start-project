import styled from "styled-components"
import { thema } from "../../../styles/Thema"


// Определение типа для пропсов компонента Field
type FieldProps = {
    placeholder?: string;
}



const Contacts= styled.section`
    
`

const Form = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;//легко выровнять форму центрировать

textarea {
    resize: none;
    height: 155px;
}
`
   
const Field = styled.input<FieldProps>`
width: 100%;//ширина поля ввода
background-color: ${thema.colors.secondaryBg};
border: 1px solid ${thema.colors.borderColor};
padding: 7px 15px;

font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 12px;
letter-spacing: 0.5em;

color: ${thema.colors.font};

&::placeholder {
color: ${thema.colors.placeholderColor};
text-transform: capitalize;
}

&:focus-visible{
    outline: 1px solid ${thema.colors.borderColor};;
}
`
  



export const S = {
    Contacts,
    Form,
    Field
}