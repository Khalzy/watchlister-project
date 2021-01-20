import React from 'react'
import styled from 'styled-components';

export const DetailsCover = ({ details }) => {

  return (
      <Content>
          <BackgroundImg style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})`}}/> 
                <Card>
                        <img src={`https://image.tmdb.org/t/p/w300/${details.poster_path ? details.poster_path : details.backdrop_path}`}  alt={details.title} />
                    <Meta>
                        <h1>{details.name ? details.name : details.title}</h1> 
                        <p>Release:</p>
                        <p>{details.release_date  ? details.release_date.substring(0, 4) : details.first_air_date.substring(0, 4) }</p> 
                        <p>Rating:</p>
                        <p>{details.vote_average ? details.vote_average : 'Not yet rated'}</p>
                        <p>Storyline</p>
                        <p>{details.overview ? details.overview : details.overview}</p> 
                    </Meta>
            </Card>
      </Content>
  )
};


const BackgroundImg = styled.image`
    background-position: fixed;
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    position: absolute;
    z-index:-1;
    top:0;
    left:0;
    bottom:0;
    right:0;
    filter:blur(8px);
    background-size:100vw auto;
    background-color: black;
`;
const Content = styled.div`
    z-index: 1;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    @media screen and (max-width: 700px) {
        background-color: rgb(0,0,0,1);
    }
`;
const Card = styled.div`
    margin: 100px 0px 0px 0px;
    width: auto;
    padding: 10px;
    height: auto;
    display: flex;
    align-items: center;
    color: white;
    background-color: rgb(0,0,0,0.3);
    box-shadow: 5px 10px rgb(0,0,0,0.5);
    img {
        width: 300px;
        height: 450px;
        object-fit: cover;
    }
    @media screen and (min-width: 768px) {
        img {
            width: 154px;
            height: 250px;
            object-fit: cover;
        }
    } 
    @media screen and (max-width: 768px) {
        margin: 30px 0px 0px 0px;
        height: auto;
        img {
            width: 100px;
            height: 200px;
            object-fit: cover;
        }
    } 
    @media screen and (max-width: 700px) {
        background-size:100vw auto;
        display: flex;
        flex-direction: column;
        margin: 0px 0px 0px 0px;
        height: auto;
        box-shadow: none;
        h1 {
            text-align: center;
        }
        img {
            width: 137px;
            height: 250px;
            object-fit: cover;
        }
    } 
`;

const Meta = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    h1 {
        paddng: 0px;
        margin: 0px;
        font-size: 20px;
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 10px;
        line-height: 1.3rem;
        padding-right: 5px;

    }

    @media screen and (max-width: 768px) {
        height: 200px;
        width: 500px;
        line-height: 0.5rem;

        h1 {
            font-size: 10px;
            margin-bottom: 0px;
        }
        p {
            font-size: 10px;
            margin-bottom: 0px;
        }
    } 

    @media screen and (max-width: 700px) {
        height: auto;
        width: auto;
        line-height: 0rem;
        h1 {
            font-size: 10px;
            margin-bottom: 0px;
        }
        p {
            font-size: 10px;
            margin-bottom: 0px;
        }
    } 
`;