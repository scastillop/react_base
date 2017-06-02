import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Me gusta programar!</h4>
    <img className='duck' src={DuckImage} />
  </div>
)

export default HomeView
