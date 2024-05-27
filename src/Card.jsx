import Title from "./Title.jsx";
import ResetButton from "./ResetButton.jsx";
import CounterButtons from "./CounterButtons.jsx";

export default function Card() {
    return <div>
        <Title/>
        <Card/>
        <ResetButton/>
        <CounterButtons/>
    </div>
}