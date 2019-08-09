import React from 'react';

export default class FoodCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="food-card">
                <div>
                    
                    Name: {this.props.food.name}
                </div>

                <div>
                    Course: {this.props.food.course}
                </div>

                <div>
                    Technique: {this.props.food.technique}
                </div>

            </div>
        )
    }
}