import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './charList.scss';
import './../../style/button.scss';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

const CharList = ({ onCharSelected }) => {

    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => { onRequest() }, []);

    const onRequest = (offset) => {
        onCharListLoading();
        marvelService.getAllCharacters(offset).then(onCharListLoaded
        ).catch(onError);
    }

    const onCharListLoading = () => {
        setNewItemLoading(true);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const onCharListLoaded = (newCharList) => {

        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setLoading(false);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    const renderItems = (arr) => {
        let imgStyle = { 'objectFit': 'cover' };

        const items = arr.map((item, i) => {

            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = { 'objectFit': 'unset' };
            }
            return (<li ref={el => itemRefs.current[i] = el}
                tabIndex={0}
                onKeyPress={(e) => {
                    if (e.key === ' ' || e.key === "Enter") {
                        onCharSelected(item.id);
                        focusOnItem(i);
                    }
                }}
                className="char__item" key={item.id} onClick={() => {
                    onCharSelected(item.id);
                    focusOnItem(i)
                }}>
                <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                <div className="char__name">{item.name}</div>
            </li>)
        })

        return (<ul className='char__grid'>
            {items}
        </ul>)
    }

    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;

    return (<div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button className="button button__main button__long"
            disabled={newItemLoading}
            style={{ 'display': charEnded ? 'none' : 'block' }}
            onClick={() => onRequest(offset)}>
            <div className="inner">load more</div>
        </button>
    </div>)
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;