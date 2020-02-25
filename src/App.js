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
        <nav className='sidebar'>
          <ul className='side-nav'>
            <li className='side-nav__item side-nav__item--active'>
              <a href='' className='side-nav__link'>
                <svg className='side-nav__icon'>
                  <use xlinkHref={'img/sprite.svg#icon-home'}></use>
                </svg>
                <span>Hotel</span>
              </a>
            </li>

            <li className='side-nav__item'>
              <a href='' className='side-nav__link'>
                <svg className='side-nav__icon'>
                  <use
                    xlinkHref={'img/sprite.svg#icon-aircraft-take-off'}
                  ></use>
                </svg>
                <span>Flight</span>
              </a>
            </li>

            <li className='side-nav__item'>
              <a href='' className='side-nav__link'>
                <svg className='side-nav__icon'>
                  <use xlinkHref={'img/sprite.svg#icon-key'}></use>
                </svg>
                <span>Car Rental</span>
              </a>
            </li>

            <li className='side-nav__item'>
              <a href='' className='side-nav__link'>
                <svg className='side-nav__icon'>
                  <use xlinkHref={'img/sprite.svg#icon-map'}></use>
                </svg>
                <span>Tours</span>
              </a>
            </li>
          </ul>
          <div className='legal'>
            &copy; 2020 by Trillo All rights reserved.
          </div>
        </nav>

        <main className='hotel-view'>
          <div className='gallery'>
            <figure className='gallery__item'>
              <img
                src={'../img/hotel-1.jpg'}
                alt='Photo of hotel 1'
                className='gallery__photo'
              />
            </figure>
            <figure className='gallery__item'>
              <img
                src={'../img/hotel-2.jpg'}
                alt='Photo of hotel 1'
                className='gallery__photo'
              />
            </figure>
            <figure className='gallery__item'>
              <img
                src={'../img/hotel-3.jpg'}
                alt='Photo of hotel 1'
                className='gallery__photo'
              />
            </figure>
          </div>
          <div className='overview'>
            <h1 className='overview__heading'>Hotel Las Palms</h1>
            <div className='overview__stars'>
              <svg className='overview__icon--star'>
                <use xlinkHref={'img/sprite.svg#icon-star'}></use>
              </svg>
              <svg className='overview__icon--star'>
                <use xlinkHref={'img/sprite.svg#icon-star'}></use>
              </svg>
              <svg className='overview__icon--star'>
                <use xlinkHref={'img/sprite.svg#icon-star'}></use>
              </svg>
              <svg className='overview__icon--star'>
                <use xlinkHref={'img/sprite.svg#icon-star'}></use>
              </svg>
              <svg className='overview__icon--star'>
                <use xlinkHref={'img/sprite.svg#icon-star'}></use>
              </svg>
            </div>
            <div className='overview__icon--location'>
              <svg className='side-nav__icon'>
                <use xlinkHref={'img/sprite.svg#icon-location-pin'}></use>
                <button className='btn-inline'>Utah, Portugal</button>
              </svg>
            </div>
            <div className='overview__rating'>8.6</div>
            <div className='overview_rating-count'>420.9</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
