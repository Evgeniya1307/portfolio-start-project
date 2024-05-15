import React from "react";
import { S } from "./Contacts_Styles";
import { SectionTitle } from "../../SectionTitle";
import { Button } from "../../Button";
import { Container } from "../../Container";







export const Contact:React.FC = () =>{
    return(
<S.Contacts>
    <Container>
    <SectionTitle>Contact</SectionTitle>
    <S.Form>
    <S.Field placeholder={'name'}/>
    <S.Field placeholder={'subject'}/>
    <S.Field placeholder={'message'} as={'textarea'}/>
    <Button type={'submit'}>Send message</Button>
    </S.Form> 
    </Container>
</S.Contacts>
    )
}



