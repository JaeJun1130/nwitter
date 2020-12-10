import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Button = styled.button``;

const ProfilePresenter = ({ onLogOutClick }) => {
    return (
        <>
            <Button onClick={() => onLogOutClick()}>Log out</Button>
        </>
    );
};

export default ProfilePresenter;
