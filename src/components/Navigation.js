import react from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EditProfile from "routes/EditProfile";

const Wrapper = styled.ul``;
const Title = styled.li``;

const Navigation = () => {
    return (
        <Wrapper>
            <Title>
                <Link to="/">Home</Link>
            </Title>
            <Title>
                <Link to="/profile">ProFile</Link>
            </Title>
        </Wrapper>
    );
};

export default Navigation;
