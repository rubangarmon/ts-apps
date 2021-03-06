import React, { FunctionComponent, useEffect, useState } from 'react';
import * as Models from './../models/Quiz';
import Card from './Card';
import './Main.scss';


const MainContainer: FunctionComponent<{ initial?: Models.QuizResponse; }>
    = ({ initial }) => {
        // Below is one way state is set using React Hooks, where the first 
        //deconstructed variable`quizzes` is the state variable name 
        // and `setQuizzes` is the methodName called to update the quizzes state 
        //if needed. Here, use it after the data is fetched successfully.
        const [quizzes, setQuizzes] = useState(initial);
        const [shouldShowCards, setShouldShowCards] = useState(false);

        const fetchData = async (): Promise<void> => {
            const res = await fetch('https://opentdb.com/api.php?amount=10&type=boolean');
            res.json()
                .then(res => setQuizzes(res))
                .catch(err => console.dir(err));
        };

        useEffect(() => {
            fetchData();
        }, []);

        const handleButtonClick = (): void => {
            setShouldShowCards(true);
        }

        return (
            <main className="Main">
                {!shouldShowCards ? (
                    <React.Fragment>
                        <h2>Welcome to the trivia Challenge!</h2>
                        <div className="StartEndCard">
                            <h2>You will....</h2>
                            <p>Can you score 10/10?</p>
                            <button type="submit" className="Button" onClick={() => handleButtonClick()} >Get started!</button>
                        </div>
                    </React.Fragment>
                ) : <Card quizQuestions={quizzes} />

                }
            </main>
        );
    };

export default MainContainer;