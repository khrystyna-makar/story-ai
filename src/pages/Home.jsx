import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import '../App.css'
import data from '../data/stories.json'
import StyledRating from '../components/StyledRating'
import { FavoriteIcon, FavoriteBorderIcon } from '../components/Icons';
import { v4 as uuid } from 'uuid';

function Home() {

    const API_KEY = "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";

    const API_body = {
        "model": "gpt-3.5-turbo",
        "messages": [],
        "temperature": 0,
        "max_tokens": 256
    }

    const [story, setStory] = useState({})

    const navigate = useNavigate();

    function getRandomStory() {
        let index = Math.floor(Math.random() * 5) + 1;
        return data.stories[index].story;
    }

    async function callAI() {
        // try {
        //   await fetch("https://api.openai.com/v1/chat/completions", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       "Authorization": "Bearer " + API_KEY
        //     },
        //     body: JSON.stringify(API_body)
        //   }).then((data) => {
        //     return data.json();
        //   }).catch((e) => {
        //     setStory(getRandomStory());
        //   }).then((data) => {
        //     console.log(data);
        //   })
        // } catch(e){
        //   console.log('catch')
       // }
        const id = uuid();
        setStory({ id, start: story.start, text: getRandomStory(), rate: 0 })
    }

    const save = () => {
        // if(story.id === null){
        //     const id = uuid();
        //     story.id = id;
        // }
        const storyJSON = JSON.stringify(story);
        localStorage.setItem(story.id, storyJSON);
    }

    const view = () => {
        navigate(`/story/${story.id}`, { state: story });
    }

    return (
        <div className='app'>
            <section className='top'>
                <h1 className='title'>Invite the magic of AI into your stories</h1>
                <div>
                    <textarea placeholder='Start your story...'
                        onChange={(e) => setStory({...story, start: e.target.value})}
                        maxLength={200}
                        cols={60} rows={4} />
                </div>
                <div className='btn'>
                    <button className='button' onClick={callAI}>Create story with AI</button>
                </div>
            </section>
            {story.text !== undefined ?
                (<div className='story-wrapper'>
                    <div>
                        <b className='story-prompt'>{story.start} </b>
                        <h4 className='story-text'>{story.text}</h4>
                    </div>
                    <hr />
                    <div className='story-bottom'>
                        <button className='button' onClick={save}>Save</button>
                        <div>
                            <p>How do you love the story?</p>
                            <StyledRating
                                name="rating"
                                defaultValue={0}
                                value={story.rate}
                                onChange={(e, newValue) => {
                                    setStory({ ...story, rate: newValue });
                                }}
                                precision={0.5}
                                icon={<FavoriteIcon fontSize="inherit" />}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                            />
                        </div>
                        <button className='button' onClick={view}>View</button>
                    </div>
                </div>) : null
            }
        </div>
    )
}

export default Home
