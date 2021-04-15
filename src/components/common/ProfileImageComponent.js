import React from 'react';
import './ProfileImageComponent.scss';

const ProfileImageComponent = ({type = 'small', url}) => {
    return (
        <div className={`ProfileImage ${type}`} type={type}>
            <img className="Photo" src={url}></img>
        </div>
    );
};

export default ProfileImageComponent;