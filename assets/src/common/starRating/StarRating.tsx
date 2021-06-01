import React from 'react';
import  Glyphicon  from 'react-bootstrap';
import "./starRating.css";

interface StarRatingProps {
  stars: number
}

class StarRating extends React.Component<StarRatingProps> {
  render() { 
    return(<div></div>);
    /*

    this was causing errors with the testing
    
    return (
      <span>             
        <Glyphicon glyph={this.props.stars >= 1 ? "star" : "star-empty"} />
        <Glyphicon glyph={this.props.stars >= 2 ? "star" : "star-empty"} />
        <Glyphicon glyph={this.props.stars >= 3 ? "star" : "star-empty"} />
        <Glyphicon glyph={this.props.stars >= 4 ? "star" : "star-empty"} />
        <Glyphicon glyph={this.props.stars >= 5 ? "star" : "star-empty"} />                          
      </span>
    );*/
  }
}

export default StarRating;