import React from "react";

const ProfileCard = ({name, age, bio}) => {
    return(
        <div className="biolist">
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Bio: {bio}</li>
            </ul>
        </div>
    );
};


export default ProfileCard;