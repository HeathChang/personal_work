//import from 3rd party
import React, { Fragment } from 'react';

//import from src/files
import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            {/* dash inside => use [] */}
            <div className={classes['main-image']}>
                <img src={mealsImage} alt=""/>
            </div>
        </Fragment>
    )
}

export default Header;