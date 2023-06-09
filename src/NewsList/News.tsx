import { useState, useEffect } from "react";
import { NewsFetch } from "./NewsFetch";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import spinner from "../assets/spinner.gif";

interface NewsType {
  urlToImage: string;
  title: string;
  description: string;
  url: string;
}

export const News = () => {
  const [newsList, setNewsList] = useState<NewsType[]>([]);
  let page = 1;
  const location = useLocation();
  const category: string = location.state.category;

  //카테고리 변화가 있을 때
  useEffect(() => {
    (async () => {
      const getNewsList = await NewsFetch(category, page);
      setNewsList((prevNewsList) => [...getNewsList.articles]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // --------------- IntersectionObserver -------------------
  //page의 변화(스크롤이 닿을 때)가 있을 때
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            page++;
            (async () => {
              const getNewsList = await NewsFetch(category, page);
              setNewsList((prevNewsList) => [
                ...prevNewsList,
                ...getNewsList.articles,
              ]);
            })();
          }
        });
      },
      {
        root: null,
        rootMargin: "10px",
        threshold: 1.0,
      }
    );

    const target = document.querySelector(".loading") as HTMLElement;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [category, page]);

  // --------------------------------------------------------
  if (!newsList) {
    return (
      <Loading className="loading">
        <img src={spinner} alt="spinner" />
      </Loading>
    );
  }

  return (
    <>
      {newsList.map((news) => {
        return (
          <NewsLink to={news.url}>
            <Thumbnail src={news.urlToImage} alt="뉴스 이미지"></Thumbnail>
            <Contents>
              <Title>{news.title}</Title>
              <Description>{news.description}</Description>
            </Contents>
          </NewsLink>
        );
      })}
      <Loading className="loading">
        <img src={spinner} alt="spinner" />
      </Loading>
    </>
  );
};

const Loading = styled.div`
  text-align: center;
  padding: 30px;

  img {
    width: 60px;
  }
`;

const NewsLink = styled(Link)`
  height: 200px;
  width: 80%;
  display: flex;
  margin: 0 auto;
  margin-top: 120px;
  min-width: 730px;
`;

const Thumbnail = styled.img`
  height: 200px;
  min-width: 320px;
  margin-right: 32px;
  border: 1px solid #c0c0c0;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h2`
  height: 40%;
`;

const Description = styled.div`
  height: 60%;
`;
