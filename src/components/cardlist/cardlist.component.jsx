import React from 'react';
import { Card } from './card/card.component';
import './cardlist.css';

//Components take in props
export const Cardlist = props =>
    (<div className='card-list'>{
        props.robots.map(robot => (<Card key={robot.id} robot={robot}/>)
      )}</div>);

