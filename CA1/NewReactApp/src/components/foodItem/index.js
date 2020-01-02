import React, { Component, Fragment } from 'react';
import './foodItem.css';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default class NewsItem extends Component {
    handleIncreaseQuantity = () =>  this.props.increaseQuantityHandler(this.props.item.id);
    handleDecreaseQuantity = () =>  this.props.decreaseQuantityHandler(this.props.item.id);

  render() {
      const type = this.props.item;
      const typeLink = '/' + this.props.item.type;

        let line = this.props.item.link ? (
            <a href={this.props.item.link}>{this.props.item.title}</a>
        ) : (
            <span>{this.props.item.title}</span>
        );
        return (
            <Fragment>
                <div className="line">
                <span className="ptr" onClick={this.handleIncreaseQuantity}>
                <FontAwesomeIcon icon={["fas", "plus-square"]} size="1x" />
                </span>
                <span>{` ${this.props.item.quantity}`}</span>
                <span className="ptr" onClick={this.handleDecreaseQuantity}>
                <FontAwesomeIcon icon={["fas", "minus-square"]} size="1x" style={{marginLeft: 5}}/>    
                </span>
                <span className="newsitem">
                    {line}
                    <span>
                        {/*<a href="/">{this.props.item.type}</a>*/}
                        <Link to={typeLink}>{typeLink}</Link>
                    </span>
                    <p></p>
                </span>
                </div>
            </Fragment>
        );
    }
} 