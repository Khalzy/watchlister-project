import React, { useState } from 'react';
import { PosterCover } from './PosterCover';
import { Slider } from './Slider';
import * as Fn from './Api';
import styled from 'styled-components'
import 'react-alice-carousel/lib/alice-carousel.css';

export const Home = () => {
    const [Latest, setLatest] = useState([])
    const [NowPlaying, setNowPlaying] = useState([])
    const [Upcoming, setUpcoming] = useState([])

        Fn.default.then((data) => {
        if (data) {
            setLatest(data.latest.results)
            setUpcoming(data.upcoming.results)
            setNowPlaying(data.now_playing.results)
        } else {
            setNowPlaying([])
            setUpcoming([])
            setLatest([])
        }   
    });

    return (
        <Wrapper>
            <Slider/>
            <Container>
                    <h1 className="heading">Upcoming Movies</h1>
                    <PosterCover  Upcoming={Upcoming}/>
            </Container>


            <Container>
                    <h1 className="heading">Top Rated</h1>
                    <PosterCover  Latest={Latest}/>
            </Container>

                <Container>
                    <h1>Tv shows</h1>
                    <PosterCover  NowPlaying={NowPlaying}/>
                </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;

`;
    
    const Container = styled.div`
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    @media screen and (max-width:  480px) {
        padding-left: 0px;
        padding-right: 0px;
    }
`;
