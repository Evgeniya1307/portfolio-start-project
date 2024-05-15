import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";


const socialItemsData = [
  {
    iconId: 'instagram',
  },
  {
    iconId: 'telegram',
  },
  {
    iconId: 'linkedin',
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={'column'} align={'center'}>
        <S.Name>Evgeniya</S.Name>
        <S.SocialList>
          {socialItemsData.map((s, index) => (
            <S.SocialItem key={index}>
              <S.SocialLink>
                <Icon
                  height={'21px'}
                  width={'21px'}
                  viewBox={'0 0 21px 21px'}
                  iconId={s.iconId}
                />
              </S.SocialLink>
            </S.SocialItem>
          ))}
        </S.SocialList>
        <S.Copyright>
          © 2024 Evgeniya Staravoitava, All Rights Reserved
        </S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};

