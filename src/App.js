import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className='container'>
      <header className='header'>
        <img src={'../img/logo.png'} alt='trillo logo' className='logo' />
        <form action='#' className='search'>
          <input
            type='text'
            className='search__input'
            placeholder='Search hotels'
          />
          <button className='search__button'>
            <svg className='search__icon'>
              <use xlinkHref={'img/sprite.svg#icon-magnifying-glass'}></use>
            </svg>
          </button>
        </form>
        <nav className='user-nav'>
          <div className='user-nav__icon-box'>
            <svg className='user-nav__icon'>
              <use xlinkHref={'img/sprite.svg#icon-bookmark'}></use>
            </svg>
            <span className='user-nav__notification'>7</span>
          </div>

          <div className='user-nav__icon-box'>
            <svg className='user-nav__icon'>
              <use xlinkHref={'img/sprite.svg#icon-chat'}></use>
            </svg>
            <span className='user-nav__notification'>13</span>
          </div>
          <div className='user-nav__user'>
            <img
              src={'../img/user.jpg'}
              alt='User Photo'
              className='user-nav__user-photo'
            />
            <span className='user-nav__user-name'>Joe</span>
          </div>
        </nav>
      </header>
      <div className='content'>
        <nav className='sidebar'>Navigation</nav>
        <main className='hotel-view'>Hotel View</main>
      </div>
    </div>
  );
}

export default App;
