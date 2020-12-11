import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Form = styled.form``;
const Input = styled.input``;

const Contents = styled.div``;
const ContentNweet = styled.div``;

const HomePresenter = ({ onSubmit, onChange, nweet, nweets, userObj }) => {
    return (
        <Wrapper>
            <Form onSubmit={(e) => onSubmit(e)}>
                <Input
                    onChange={(e) => onChange(e)}
                    value={nweet}
                    type="text"
                    placeholder="Whay's on your mind"
                    maxLength={120}
                ></Input>
                <Input type="submit" value="Nweet"></Input>
                <Contents>
                    {nweets.map((content) => (
                        <ContentNweet key={content.id}>
                            <h4>{content.text}</h4>
                        </ContentNweet>
                    ))}
                </Contents>
            </Form>
        </Wrapper>
    );
};

export default HomePresenter;
