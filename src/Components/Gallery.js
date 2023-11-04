import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context/global';
import chapt1 from '../mangas/bleach/chapters/1/1.jpeg'
import chapt2 from '../mangas/bleach/chapters/1/2.jpeg'
import chapt3 from '../mangas/bleach/chapters/1/3.jpeg'
import chapt4 from '../mangas/bleach/chapters/1/4.jpeg'
import chapt5 from '../mangas/bleach/chapters/1/5.jpeg'

function Gallery() {
    const {getAnimePictures, pictures} = useGlobalContext()
    const {id} = useParams();

    React.useEffect(() => {
        getAnimePictures(id)
    }, [id])

    return (
        <GalleryStyled>
            <div className="back">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                    Back to Home
                </Link>
            </div>
            <div className="big-image">
                <div>
                    <img src={chapt1} className='chapt' alt="" />
                </div>
                <div>
                    <img src={chapt2} className='chapt' alt="" />
                </div>
                <div>
                    <img src={chapt3} className='chapt' alt="" />
                </div>
                <div>
                    <img src={chapt4} className='chapt' alt="" />
                </div>
                <div>
                    <img src={chapt5} className='chapt' alt="" />
                </div>
            </div>
            
        </GalleryStyled>
    )
}

const GalleryStyled = styled.div`
    background-color: #EDEDED;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .back{
        position: absolute;
        top: 2rem;
        left: 2rem;
        a{
            font-weight: 600;
            text-decoration: none;
            color: #EB5757;
            display: flex;
            align-items: center;
            gap: .5rem;
        }
    }
    .big-image{
        display: inline-block;
        padding: 2rem;
        margin: 2rem 0;
        background-color: #fff;
        border-radius: 7px;
        border: 5px solid #e5e7eb;
        position: relative;
        img{
            width: 350px;
        }
    }

    .small-images{
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        width: 80%;
        padding: 2rem;
        border-radius: 7px;
        background-color: #fff;
        border: 5px solid #e5e7eb;
        img{
            width: 6rem;
            height: 6rem;
            object-fit: cover;
            cursor: pointer;
            border-radius: 5px;
            border: 3px solid #e5e7eb;
        } 
    }
`;

export default Gallery