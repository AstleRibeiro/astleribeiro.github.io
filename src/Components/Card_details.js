import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProductDetail() {
  const Data = require("../mock_data/data.json");
  const { productId } = useParams();
  const thisProduct = Data.posts.find((prod) => prod.id === productId);

  return (
    <div>
      <Container key={thisProduct.id}>
        <Profile>
          <Avatar src={thisProduct.author.avatar}></Avatar>
        </Profile>
        <Header>
          <Author>{thisProduct.author.name}</Author>
          <PublistDate>Posted : {thisProduct.publishDate}</PublistDate>
        </Header>
        <Title>
          <TitleStyle>{thisProduct.title}</TitleStyle>
        </Title>
        <Summary>
          <SummaryStyle>{thisProduct.summary}</SummaryStyle>
        </Summary>
        <Footer>
          {thisProduct.categories.map((names) => (
            <Categories>{names.name}</Categories>
          ))}
        </Footer>
        <Link to={`/`} style={{textDecoration: 'none', color:'black'}}>
          <HomeButton>Homepage</HomeButton>
        </Link>
      </Container>
    </div>
  );
}

const Author = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,900;1,400&display=swap");
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 32px;
  margin-left: 15px;
  margin-top: 5px;
  @media only screen and (max-width: 600px) {
    font-size: 22px;
    margin-left: 15px;
    margin-top: 2px;
  }
`;

const PublistDate = styled.div`
  margin-left: 18px;
  color: gray;
  font-style: italic;
  @media only screen and (max-width: 600px) {
    margin-top: 0.5vw;
    font-size: 12px;
  }
`;

const Container = styled.div`
  display: grid;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  grid-template-columns: 5vw 10vw 10vw 10vw 10vw;
  grid-template-rows: auto;
  grid-template-areas:
    "profile header header header header"
    "title title title title title"
    "summary summary summary summary summary"
    "footer footer footer footer footer";
  @media only screen and (max-width: 600px) {
    top: 15%;
    left: 5%;
    margin-right: 0;
    transform: translate(0, 0);
    grid-template-columns: 14vw 19vw 19vw 19vw 19vw;
  }
`;

const Profile = styled.div`
  grid-area: profile;
`;

const Header = styled.div`
  grid-area: header;
`;

const Title = styled.div`
  grid-area: title;
  background-color: #d9d9d9;
`;

const TitleStyle = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin: 15px;
  color: black;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Summary = styled.div`
  grid-area: summary;
  background-color: #f4f3f3;
`;

const SummaryStyle = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 14px;
  margin: 15px;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Footer = styled.div`
  grid-area: footer;
`;

export const Categories = styled.div`
  display: inline;
  margin: 5px;
  margin-top: 100px;
  padding: 5px;
  border: 2px solid #99b0a8;
  width: auto;
  height: 31px;
  border-radius: 18px;
  font-size: 12px;
  line-height: 35px;
  @media only screen and (max-width: 600px) {
    font-size: 10px;
    line-height: 32px;
  }
`;

const HomeButton = styled.div`
  padding: 10px 22px;
  width: 75px;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #364b44;
  border-radius: 12px;
  @media only screen and (max-width: 600px) {
    padding: 10px 10px;
    text-align: center;
    font-size: 12px;
    position: absolute;
    top: 100%;
    left: 35%;
    background-color: white;
    color: black;
    border: 2px solid #364b44;
    border-radius: 8px;
  }
  &:hover {
    background-color: #364b44;
    border: 2px solid white;
    color: #f4f3f3;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 70px;
  @media only screen and (max-width: 600px) {
    border-radius: 50%;
    width: 55px;
  }
`;

export default ProductDetail;
