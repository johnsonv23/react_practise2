import profilePic from './assets/profile_picture.avif'

function Card(){

    return(

        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Johnson</h2>
            <p className="card-text">I am learing react and play video games</p>
        </div>
    );

}

export default Card