import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../style/button.scss';
import './charSearchForm.scss';

const CharSearchForm = () => {



    return (

        <div className="char__search-form">

            <form>
                <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
                <div className="char__search-wrapper">
                    <input
                        id="charName"
                        name='charName'
                        type='text'
                        placeholder="Enter name" />
                    <button
                        type='submit'
                        className="button button__main"
                    >
                        <div className="inner">find</div>
                    </button>
                </div>

            </form>

        </div>

    )
}

export default CharSearchForm;