import React from 'react';
import styled from 'styled-components';
import { NewsType } from '../../../../types/NewsType';

const News = ({ data }: NewsType) => {
  return (
    <NewsWrap>
      <NewsTitle>오늘의 뉴스</NewsTitle>
      <CardWrap>
        {data.map((news, index) => {
          const date = news.writedAt.split(' ')[0];
          return (
            <CardAnchor href={news.url} key={index}>
              <NewsCard>
                <CardImg src={news.image} alt="news image" />
                <CardTitle>{news.title}</CardTitle>
                <CardDescription>
                  <span>{news.press}</span>
                  <span>{date}</span>
                </CardDescription>
              </NewsCard>
            </CardAnchor>
          );
        })}
      </CardWrap>
    </NewsWrap>
  );
};

export default News;

const NewsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  padding: 0 30px;
`;
const NewsTitle = styled.span`
  font-size: 17px;
  font-weight: 600;
`;

const CardWrap = styled.div`
  display: flex;
  margin: 10px 10px 10px 0;
`;

const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  width: 140px;
  margin-right: 10px;
  &:hover {
    margin-top: -10px;
    transition: all 0.45s ease;
  }
`;

const CardAnchor = styled.a`
  text-decoration: none;
  color: black;
`;

const CardImg = styled.img`
  width: 140px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const CardTitle = styled.span`
  font-size: 6px;
  font-weight: 500;
  margin: 5px 5px;
`;

const CardDescription = styled.span`
  font-weight: 200;
  margin: 0 5px 5px 5px;
  span {
    font-size: 5px;
    padding: 0 2px;
  }
`;
