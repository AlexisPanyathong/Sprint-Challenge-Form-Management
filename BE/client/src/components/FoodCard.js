import React from 'react';
import { Card, NameHeader, Name, CourseHeader, Course, TechniqueHeader, Technique } from './StyledWidgets';

export default class FoodCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <div className="food-card">
                    <NameHeader>
                        Name: 
                    </NameHeader>
                    <Name>
                        {this.props.food.name}
                    </Name>

                    <CourseHeader>
                        Course: 
                    </CourseHeader>
                    <Course>
                        {this.props.food.course}
                    </Course>

                    <TechniqueHeader>
                        Technique: 
                    </TechniqueHeader>
                    <Technique>
                        {this.props.food.technique}
                    </Technique>

                </div>
            </Card>
        )
    }
}