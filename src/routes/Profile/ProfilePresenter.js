import React from "react";
import styled from "styled-components";

const Button = styled.button``;

const ProfilePresenter = ({ onLogOutClick }) => {
    return (
        <>
            <Button onClick={() => onLogOutClick()}>Log out</Button>
        </>
    );
};

export default ProfilePresenter;
