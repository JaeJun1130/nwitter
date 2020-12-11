import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Form = styled.form``;
const Input = styled.input``;

const HomePresenter = () => {
    const [nweet, setNweet] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        const {
            target: { value },
        } = e;
        setNweet(value);
    };
    return (
        <Wrapper>
            <Form oonClick={(e) => onSubmit(e)}>
                <Input
                    onChange={onChange}
                    value={nweet}
                    type="text"
                    placeholder="Whay's on your mind"
                    maxLength={120}
                ></Input>
                <Input type="submit" value="Nweet"></Input>
            </Form>
        </Wrapper>
    );
};

export default HomePresenter;
