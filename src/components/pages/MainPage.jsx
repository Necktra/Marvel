import { useState } from "react";
import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import RandomChar from "../randomChar/RandomChar";
import decoration from '../../resources/img/Vision.png';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id)
    }

    return (<>
        <ErrorBoundary>
            <RandomChar />
        </ErrorBoundary>
        <div className="char__content">
            <ErrorBoundary>
                <CharList onCharSelected={onCharSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
                <CharInfo charId={selectedChar} />
            </ErrorBoundary>
        </div>
        <img src={decoration} alt="Vision" className="bg-decoration" />
    </>
    )
}

export default MainPage;