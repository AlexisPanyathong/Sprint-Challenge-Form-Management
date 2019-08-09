import styled from 'styled-components';

//App
export const Body = styled.body`
    background-color: lightgrey;
`;

export const Header = styled.header`
    margin-top: 50px;
    margin-bottom: 40px;
    font-size: 40px;
    font-family: Lato san serif;
`;

//RegisterForm
export const RegisterForm = styled.div`
    display: flex;
    justify-content: center;
    color: red;


    Form {
        margin: 0 auto;
         
        input {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 20px;
            width: 150%;
            height: 20px;
        }
    }

`;

export const Button = styled.button`
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
    width: 60%;
    justify-content: center;
    background-color: #FFFFFF;
`;



//FoodCard
export const Card = styled.div`
    border: 2px solid black;
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
    padding-bottom: 40px;
    height: 300px;
    background-color: #0A235C;
    box-shadow: 2px 5px 5px;
    margin-bottom: 50px;
`;

export const NameHeader = styled.h1`
    font-size: 20px;
    color: #FFFFFF;
    margin-top: 45px;
`;

export const Name = styled.p`
    font-size: 16px;
    color: #FFCC00;
    padding-bottom: 15px;
    
`;

export const CourseHeader = styled.h1`
    font-size: 20px;
    color: #FFFFFF;
`;

export const Course = styled.p`
    font-size: 16px;
    color: #FFCC00;
    padding-bottom: 15px;
`;

export const TechniqueHeader = styled.h1`
    font-size: 20px;
    color: #FFFFFF;
`;

export const Technique = styled.p`
    font-size: 16px;
    color: #FFCC00;
    padding-bottom: 15px;
`;

