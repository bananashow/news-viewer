import axios from "axios";

export const NewsFetch = async (category: string, page: number) => {
  let newsUrl = "";
  const apiKey = "#########################";
  const pageSize = 5;

  if (category === "all") {
    newsUrl = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;
  } else {
    newsUrl = `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;
  }
  const getNews = await axios.get(newsUrl);
  const newsList = getNews.data;
  return newsList;
};
