import './App.css';
import { useState , useEffect} from 'react';

function App(){
    const [Timer , setTimer] = useState(0);
    const [IsRunning , setIsRunning] = useState(false);

    // controls the start and stop 
    useEffect(() => {
        let interval;
        if(IsRunning){
            interval = setInterval(() => setTimer(Timer => Timer+1), 10);
        }
        return ()=>{clearInterval(interval)}
    },[IsRunning]);


    // takes care of time written in minutes seconds 
    const formatTime = (Timer) => {
        const minutes = Math.floor(Timer / 60000);
        const seconds = Math.floor((Timer % 60000) / 1000);
        const milliseconds = Math.floor((Timer % 1000) / 10);

        const pad = (num) => (num < 10 ? "0" + num : num);
        return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
};

    return(
        <div>
            <h1>StopWatch</h1>
            <h1>{formatTime(Timer)}</h1>
            <div className='buttons'>
                <button onClick={() => setIsRunning(true)}>Start</button>
                <button onClick={() => setIsRunning(false)}>Stop</button>
                <button onClick={() => setTimer(0)}>Reset</button>
            </div>
        </div>
    )
}

export default App;