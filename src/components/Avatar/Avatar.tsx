import imgAvatar from '/images/image-avatar.png';


export const Avatar = () => {
    return (
        <div className="avatar">
            <img src={imgAvatar} alt="avatar" className="avatar-img" />
        </div>
    )
}