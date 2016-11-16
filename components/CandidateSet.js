import React, { Component } from 'react';
import { newOrder, candidateSort, keyedObjArray } from '../core/services/ballot';
import R from 'ramda';
import update from 'react/lib/update';
import Card from './Card';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const style = { fontSize: 28, textAlign: 'center' };

@DragDropContext(HTML5Backend)
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
  }

  render() {
    const cards = candidateSort(
      keyedObjArray(this.props.members || {}), 
      this.props.order || []
    );
    
    return (
      <div style={style}>
        {cards.map((card, i) => {
          return (
            <Card key={card.key}
                  index={i}
                  id={card.key}
                  text={card.datom.name}
                  moveCard={this.moveCard} />
          );
        })}
      </div>
    );
  }
  moveCard(dragIndex, hoverIndex) {
    this.props.orderBase.set(newOrder((this.props.order || []), dragIndex, hoverIndex))
  }
}