import { dbService } from "fBase";
import React, { useState, useEffect } from "react";
import HomePresenter from "routes/Home/HomePresenter";

const HomeContainer = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    // const getNweets = async () => {
    //     const dbNweets = await dbService.collection("nweets").get();
    //     dbNweets.forEach((document) => {
    //         const nweetObject = {
    //             ...document.data(),
    //             id: document.id,
    //         };
    //         setNweets((prev) => [nweetObject, ...prev]);
    //     });
    // };

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            console.log("snapshot.docs");
            const nweetArry = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setNweets(nweetArry);
        });
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setNweet("");
    };

    const onChange = (e) => {
        const {
            target: { value },
        } = e;
        setNweet(value);
    };

    return <HomePresenter onSubmit={onSubmit} onChange={onChange} nweet={nweet} nweets={nweets} userObj={userObj} />;
};

export default HomeContainer;
