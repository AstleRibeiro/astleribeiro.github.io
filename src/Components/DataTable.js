import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Categories } from "./Card_details";

function DataTable({ data }) {
  return (
    <Container>
      {data.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/card/${item.id}`} style={{textDecoration: 'none', color:'black'}}>
              <Avatar src={item.author.avatar} alt={item.author.name} />
              <Name> {item.author.name}</Name>
              <PublistDate>Posted on {item.publishDate}</PublistDate>
              <Title>{item.title} </Title>
              <CategoriesMargin>
                {item.categories.map((names) => (
                  <Categories>{names.name}</Categories>
                ))}
              </CategoriesMargin>
            </Link>
          </Card>
        );
      })}
    </Container>
  );
}

const Name = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,900;1,400&display=swap");
  margin-top: -4.5vw;
  color: black;
  margin-left: 6vw;
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 22px;
  @media only screen and (max-width: 600px) {
    margin-top: -16vw;
    color: black;
    margin-left: 20vw;
    font-size: 18px;
  }
`;

const Title = styled.div`
  margin-left: 6vw;
  margin-top: 0px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 14px;
  @media only screen and (max-width: 600px) {
    margin-left: 3vw;
    margin-top: 10vw;
  }
`;

const CategoriesMargin = styled.div`
  margin-left: 5vw;
  padding-bottom: 1vw;
  margin-top: 1vw;
  @media only screen and (max-width: 600px) {
    margin-left: 2vw;
    padding-bottom: 3vw;
  }
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const PublistDate = styled.div`
  color: #c4c4c4;
  float: right;
  margin: 1vw;
  font-style: italic;
  font-size: 14px;
  margin-top: 3vw;
  @media only screen and (max-width: 600px) {
    color: #c4c4c4;
    float: left;
    margin-top: 0.5vw;
    margin-left: 20vw;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin: 1vw;
  @media only screen and (max-width: 600px) {
    border-radius: 50%;
    margin: 4vw;
  }
`;

const Container = styled.div`
  margin-right: 2%;
  margin-left: 2%;
`;

export default DataTable;
