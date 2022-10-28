import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PageNotFoundImage from '../../assets/404error.png';
const NotFound = () => {
  const navigate = useNavigate();
  const goToPrevPage = () => {
    navigate(-1);
  };
  return (
    <Wrap>
      <Contents>
        <ImageSection>
          <ErrorImage
            src={PageNotFoundImage}
            alt="page not found Image"></ErrorImage>
        </ImageSection>
        <TextSectoin>
          <TextEmoticon>: (</TextEmoticon>
          <Text>요청하신 페이지를 찾을 수 없습니다.</Text>
          <PrevButton onClick={goToPrevPage}>이전 페이지 이동</PrevButton>
        </TextSectoin>
      </Contents>
    </Wrap>
  );
};

const Wrap = styled.div`
  ${({ theme }) => theme.flexMixin('', 'center')}
`;

const Contents = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')}
  width: 1080px;
  padding-top: 70px;
`;

const ImageSection = styled.div`
  ${({ theme }) => theme.flexMixin('', 'center')};
  margin-right: 10px;
`;

const ErrorImage = styled.img`
  width: 32rem;
`;

const TextSectoin = styled.div`
  margin-top: 80px;
  color: ${(props) => props.theme.black};
`;

const TextEmoticon = styled.p`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

const PrevButton = styled.button`
  margin-top: 30px;
  background-color: ${(props) => props.theme.hoverBlue};
  padding: 10px 30px;
  color: white;
  border-radius: 30px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    opacity: 0.8;
  }
`;

export default NotFound;
