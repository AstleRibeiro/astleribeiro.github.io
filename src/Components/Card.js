import React, { useState, useEffect } from "react";
import { useLocationState } from "react-router-use-location-state";
import styled from "styled-components";
import DataTable from "./DataTable";

const Card = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useLocationState("results", 6);
  useEffect(() => {
    fetch('api/posts')
       .then((res) => res.json())
       .then((data) => {
         const { posts } = data;
         // Set API data in state
         setPosts(posts);
       })
  }, []);

  const search = (data) => {
    return data.filter((post) => {
      for (let i = 0; i < post.categories.length; i++) {
        if (
          post.categories[i].name
            .toLowerCase()
            .indexOf(searchQuery.toLowerCase()) > -1
        )
          return true;
      }
      return false;
    });
  };

  {/* The Search function tries to search each letter from the names in the categories. */}

  const handlePagination = () => {
    let newResults = results + 6;
    if (newResults > posts.length) {
      setResults(posts.length);
      window.scrollTo(0, 0);
    } else {
      setResults(newResults);
      
    }
  };

  {/* Handle Pagination checks through the number of posts and 
displays only 6 posts per page on which a show more button appears 
once it has reached the end a Scroll to the Top button appears which 
brings the user back to the top of the screen */}

  return (
    <>
      <Post>Post List</Post>
      <Search>
        <label>
          Search:{" "}
          <input
            name="filter-input-field"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Categories..."
          ></input>
        </label>
      </Search>

      <DataTable data={search(posts).slice(0, results)} />
      <Pagination>
        <p>
          Showing {search(posts).slice(0, results).length} of{" "}
          {search(posts).length}
        </p>
        {results >= search(posts).length ? (
          <Button onClick={handlePagination}>Scroll to top</Button>
        ) : (
          <Button onClick={handlePagination}>Show More</Button>
        )}
      </Pagination>
    </>
  );
};

const Search = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,900;1,400&display=swap");
  display: block;
  float: right;
  margin-top: -3vw;
  padding-right: 2.5vw;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 12px;
    margin-top: -7vw;
  }
`;

const Pagination = styled.div`
  width: 100%;
  min-height: 50px;
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    font-size: 12px;
    padding: 4px 8px;
    margin: 4px;
    background-color: #f5f5f5;
    border: 1px solid #d5d5d5;
    border-radius: 8px;
    &:hover {
      background-color: #d5d5d5;
    }
  }
`;

const Post = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,900;1,400&display=swap");
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 32px;
  margin-left: 2.5vw;
  padding-bottom: 1vw;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Button = styled.div`

  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: white; 
  color: black; 
  border: 2px solid #364B44;
  border-radius: 12px;

  &:hover{
  background-color:  #364B44;
  border: 2px solid white;
  color: #F4F3F3;
  }
}`;
export default Card;
