import React from "react";

export const ProfileTitle = ({currentUserProfile}) => {
    const {userAvatar, userName, userPosition, userSummary} = currentUserProfile
    const {src, alt } = userAvatar;
    return (<div className="title" >
                <div className="title__img-box" >
                    <img src={src} alt={alt} 
                        className="title__img" />
                </div>
                <div className="title__description-box" >
                    <h3 className="title__name" >
                        {userName}
                    </h3>
                    <p className="title__position" >
                        {userPosition}
                    </p>                    
                    <p className="title__summary" >
                        {userSummary}
                    </p>
                </div>
            </div>)
}
