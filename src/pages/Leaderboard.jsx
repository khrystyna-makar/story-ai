import { useEffect, useState } from "react";
import StyledRating from '../components/StyledRating'
import { FavoriteIcon, FavoriteBorderIcon } from '../components/Icons';

const getStories = () => {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
        let item = JSON.parse(localStorage.getItem(keys[i]));
        values.push(item);
    }
    return values;
}

function Leaderboard() {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        let allStories = getStories();
        setStories(allStories);
    }, []);

    const storyItems = stories.sort((item1, item2) => item2.rate - item1.rate).map((story) =>
    (
        <div className="story-item" key={story.id}>
            <b className='story-prompt'>{story.start}</b>
            <h4 className="story-text">{story.text}</h4>
            <StyledRating name="rating"
                className="story-rate"
                readOnly
                value={story.rate}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
        </div>
    )
    );

    return (
        <div className="night-bg">
            <h2 className="title">
                Leaderboard
            <img src="../trophy.png" width={36} alt=""/>
            </h2>
            <div className="items">
                {storyItems}
            </div>
        </div>
    )
}

export default Leaderboard;