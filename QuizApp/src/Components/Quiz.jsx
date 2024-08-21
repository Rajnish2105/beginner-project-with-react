import { useState, useRef } from "react"
import "./Quiz.css"
import { data } from "../assets/data"

export default function Quiz() {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add("correct")
                setLock(true);
                setScore(prev => prev + 1)
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct");
            }
        }
    }

    const handleNext = () => {
        if (lock) {
            if (index === data.length - 1) {
                setResult(true)
                return 0;
            }
            setIndex(prev => prev + 1)
            setQuestion(data[index]);
            setLock(false);
            option_array.map(option => {
                option.current.classList.remove("wrong", "correct")
                return null;
            })
        }
    }

    const Reset = () => {
        setIndex(0);
        setQuestion(data[index]);
        setScore(0);
        setLock(false)
        setResult(false);
    }

    return (
        <div className="container" >
            <h1>Quiz App</h1>
            <hr />
            {result ?
                <>
                    <h2>You Scored {score} out of {data.length}</h2>
                    <button onClick={Reset}>Reset</button>
                </> :
                <>
                    <h2>{index + 1}. {question.question} </h2>
                    <ul>
                        <li ref={Option1} onClick={(e) => { checkAns(e, 1) }} >{question.option1}</li>
                        <li ref={Option2} onClick={(e) => { checkAns(e, 2) }} >{question.option2}</li>
                        <li ref={Option3} onClick={(e) => { checkAns(e, 3) }} >{question.option3}</li>
                        <li ref={Option4} onClick={(e) => { checkAns(e, 4) }} >{question.option4}</li>
                    </ul>
                    <button onClick={handleNext} >Next</button>
                    <div className="index" >{index + 1} /{data.length} questions</div>
                </>}

        </div>
    )
}