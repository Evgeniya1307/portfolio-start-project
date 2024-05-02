import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Button } from "../../Button";



// Определение типа для пропсов компонента Field
type FieldProps = {
    placeholder?: string;
}


export const Contact = () =>{
    return(
<StyledContacts>
<SectionTitle>Contact</SectionTitle>
<StyledForm>
    <Field placeholder={'name'}/>
    <Field placeholder={'subject'}/>
    <Field placeholder={'message'} as={'textarea'}/>
    <Button type={'submit'}>Send message</Button>
    </StyledForm> 
</StyledContacts>
    )
}




const StyledContacts= styled.section`
    min-height: 50vh;
    background-color:#e5ec1b;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction:column;
    gap: 10px;
    margin: 0 auto;//легко выровнять форму центрировать
`

// пропс placeholder к компоненту input
   
const Field = styled.input<FieldProps>`

`
  
