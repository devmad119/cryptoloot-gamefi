import React from "react";
import styled from "styled-components";

import Text from "./Text";

export const ImageCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 390px;
  * {
    margin-top: 10px;
  }
  @media screen and (max-width: 389px) {
    margin: 0 15px;
  }
`;

const ImageCard = (props) => {
  return (
    <ImageCardContainer>
      <img
        draggable="false"
        src={props.imageUrl}
        width={props.imageSize}
        height="auto"
        alt="image"
      />
      <Text
        fSize={24}
        lHeight={36}
        fWeight={700}
        Color="#fff"
        content={props.title}
      />
      <Text
        fSize={16}
        lHeight={30}
        fWeight={400}
        Color="#948CB4"
        content={props.content}
      />
    </ImageCardContainer>
  );
};

export default ImageCard;
