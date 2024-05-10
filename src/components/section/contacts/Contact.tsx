import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Button } from "../../Button";
import { Container } from "../../Container";
import { thema } from "../../../styles/Thema";



// Определение типа для пропсов компонента Field
type FieldProps = {
    placeholder?: string;
}


export const Contact = () =>{
    return(
<StyledContacts>
    <Container>
    <SectionTitle>Contact</SectionTitle>
    <StyledForm>
    <Field placeholder={'name'}/>
    <Field placeholder={'subject'}/>
    <Field placeholder={'message'} as={'textarea'}/>
    <Button type={'submit'}>Send message</Button>
    </StyledForm> 
    </Container>
</StyledContacts>
    )
}




const StyledContacts= styled.section`
    
`

const StyledForm = styled.form`
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
  
