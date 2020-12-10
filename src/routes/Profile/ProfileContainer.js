import { authService } from "fBase";
import React from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useHistory } from "react-router-dom";

const ProfileSet = () => {
    const history = useHistory(); //hook
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    return { onLogOutClick };
};
const ProfileContainer = () => {
    const { onLogOutClick } = ProfileSet();
    return <ProfilePresenter onLogOutClick={onLogOutClick} />;
};

export default ProfileContainer;
