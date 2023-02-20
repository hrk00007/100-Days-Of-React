import React, { useState } from 'react';
import people from './Data/data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

let Review = () => {

    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkIndex = (index) => {
        if (index > people.length - 1) {
            return 0;
        }
        if (index < 0) {
            return people.length - 1;
        }

        return index;
    }

    function prevPerson() {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        })
    }
    function nextPerson() {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        })
    }
    function randomPerson() {
        let randomIndex = Math.floor(Math.random() * people.length);
        if (randomIndex === index) {
            randomIndex = index + 1;
        }
        setIndex(checkIndex(randomIndex));
    }
    return (
        <article className='review'>
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className='quote-icon'><FaQuoteRight /></span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>Suprise Me</button>
        </article>
    )
}

export default Review;