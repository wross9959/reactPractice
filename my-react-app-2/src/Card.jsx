import profilePic from './assets/1679862776052.jpg'

function Card(){

    return (
        <div className="card">
            <img className ="card-image" src={profilePic} alt="profile picture" />
            <h2 className='card-title'>
                Will Ross
            </h2>
            <p className='card-text'>
                I am a Software Engineering Student at the University of New Brunswick
            </p>
        </div>
    );
}

export default Card