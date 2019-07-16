import React from 'react';
import style from '../App.css';

class Title extends React.Component {
    render() {
        return (
            <h2 className={style.Title}>
                Lista TODO ({this.props.todoCount}):
            </h2>
        );
    }
}

export default Title;
