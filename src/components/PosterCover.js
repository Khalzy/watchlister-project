import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PosterCover = ({ Latest, Upcoming, NowPlaying }) => {

  const check = Latest ? Latest : (Upcoming ? Upcoming : NowPlaying);

  return (
      <Content>
          { check.map((movie,index) => (
        <Card key={index}>
          <Link to={{ 
              pathname: `/details/${movie.title ? movie.title : movie.name}`, 
              state:{ 
                  results : movie
            }}}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  alt={movie.title}  />
          <p>{movie.name ? movie.name : movie.title}</p> 
        </Link>

        </Card>
        ))}
      </Content>
  )
};


const Content = styled.div`
  padding: 30px 0;
`;

const Card = styled.button`
  background-color: transparent;
  margin-bottom: 20px;
  outline: none;
  border: none;
  padding: 0px;
  border-radius: 10px;
  margin-right: 5px;
  margin-left: 5px;
  width: 137px;
  img {
        width: 137px;
        border-radius: 10px;
      }
  a {
    text-decoration: none;
    color: black;
    width: 154px;
  }
`;