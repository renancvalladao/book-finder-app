import React from 'react'
import './BookCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const BookCard = ({ book }) => {

    const title = book.volumeInfo.title
    const authors = book.volumeInfo.authors
    const publishedDate = book.volumeInfo.publishedDate
    const publisher = book.volumeInfo.publisher
    const averageRating = book.volumeInfo.averageRating
    const infoLink = book.volumeInfo.infoLink
    const imgUrl = book.volumeInfo.imageLinks?.thumbnail
    const altImgUrl = 'https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png'
    const stars = []
    for (let i = 0; i < averageRating; i++) {
        stars.push(<FontAwesomeIcon key={i} className='rating-icon' icon={faStar} />)
    }

    return (
        <div className='book-card'>
            <img src={imgUrl || altImgUrl} className='book-cover' alt='Book Cover' />
            <div className='book-info'>
                <div>
                    <h3>{title}</h3>
                    <p>{authors ? 'by ' + authors.join(', ') : ''}</p>
                    <p>Published on: {publishedDate}</p>
                    <p>Publisher: {publisher || 'N/A'}</p>
                    <p>Rating: {stars.length !== 0 ? stars : 'N/A'}</p>
                </div>
                <a className='more-info-button' href={infoLink} target="_blank" rel="noopener noreferrer">More info</a>
            </div>
        </div>
    )
}

export default BookCard
