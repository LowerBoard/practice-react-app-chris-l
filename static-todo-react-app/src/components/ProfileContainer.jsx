import React from "react";
import ProfileCard from "./ProfileCard";

const userProfiles = [
    {
        name: "Frodo Baggins",
        age: 33,
        bio: "returning rings to Mordor"
    },
    {
        name: "Bilbo Baggins",
        age: 111,
        bio: "defeating trolls"
    },
    {
        name: "Gollum",
        age: "unknown",
        bio: "looking for his precious"
    }
];

const ProfileContainer = () => {
    return(
        <div>
            <h1>User Profiles:</h1>
            {userProfiles.map((user) => <ProfileCard key={user.name} name={user.name} age={user.age} bio={user.bio} />)}
        </div>
    );
};

export default ProfileContainer;