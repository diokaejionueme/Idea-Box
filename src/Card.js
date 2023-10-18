import './Card.css'

function Card({ title, description, id, deleteIdea}) {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className='delete-btn' onClick={() => deleteIdea(id)}>🗑</button>
        </div>
    )
}

export default Card;