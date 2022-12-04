import styled from 'styled-components';

const News = ({ data }: { data: any }) => {
  return (
    <NewsWrap>
      <NewsTitle>오늘의 뉴스</NewsTitle>
      <CardWrap>
        {data.map((news: any, index: number) => {
          const date = news.publishedAt.split('T')[0];
          const time = news.publishedAt.split('T')[1].slice(0, 5);
          return (
            <CardAnchor href={news.url} key={index}>
              <NewsCard>
                <CardImg src={news.urlToImage} alt="news image" />
                <CardTitle>{news.title}</CardTitle>
                <CardPublishedDate>
                  <span>{date}</span>
                  <span>{time}</span>
                </CardPublishedDate>
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
  padding: 0 20px;
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
  height: 180px;
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
  height: 120px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const CardTitle = styled.span`
  font-size: 6px;
  font-weight: 500;
  margin: 5px 5px;
`;

const CardPublishedDate = styled.div`
  font-weight: 300;
  font-size: 11px;
  margin: auto 5px 5px 5px;
  display: flex;
  span {
    margin-right: 10px;
  }
`;
