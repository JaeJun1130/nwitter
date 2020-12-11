import { authService } from "fBase";
import React from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useHistory } from "react-router-dom";

const ProfileContainer = () => {
  const history = useHistory(); //hook
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return <ProfilePresenter onLogOutClick={onLogOutClick} />;
};

export default ProfileContainer;
