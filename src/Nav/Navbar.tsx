import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = styled.ul`
  list-style: none;
  margin-top: 50px;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  min-width: 730px;

  li a {
    font-size: 20px;
    font-weight: bold;
    padding: 8px;
    border-radius: 16px;
  }

  li a:hover,
  & .active {
    transition: 0.2s;
    background-color: #2dab87;
    color: white;
  }
`;

export const NavBar = () => {
  const location = useLocation();
  const CurrentCategory: string = location.state.category;
  console.log(CurrentCategory);

  return (
    <>
      <NavigationBar>
        <li>
          <Link
            to="/"
            state={{ category: "all" }}
            className={CurrentCategory === "all" ? "active" : ""}
          >
            전체보기
          </Link>
        </li>
        <li>
          <Link
            to="/"
            state={{ category: "business" }}
            className={CurrentCategory === "business" ? "active" : ""}
          >
            비즈니스
          </Link>
        </li>
        <li>
          <Link
            to="/"
            state={{ category: "entertainment" }}
            className={CurrentCategory === "entertainment" ? "active" : ""}
          >
            엔터테인먼트
          </Link>
        </li>
        <li>
          <Link
            to="/"
            state={{ category: "health" }}
            className={CurrentCategory === "health" ? "active" : ""}
          >
            건강
          </Link>
        </li>
        <li>
          <Link
            to="/"
            state={{ category: "science" }}
            className={CurrentCategory === "science" ? "active" : ""}
          >
            과학
          </Link>
        </li>
        <li>
          <Link
            to="/"
            state={{ category: "sports" }}
            className={CurrentCategory === "sports" ? "active" : ""}
          >
            스포츠
          </Link>
        </li>
        <li>
          <Link
            to="/"
            state={{ category: "technology" }}
            className={CurrentCategory === "technology" ? "active" : ""}
          >
            기술
          </Link>
        </li>
      </NavigationBar>
    </>
  );
};
