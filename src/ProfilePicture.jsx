
function ProfilePicture(){

    const imageUrl = './src/assets/profile_picture.avif'

    const handleClick = (e) => e.target.style.display="none";

    return(<img onClick={(e) => (handleClick(e))} className="profilepicture-image" src={imageUrl}></img>);
}

export default ProfilePicture