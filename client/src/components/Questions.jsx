//dependency imports
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
//local imports
import Question from './Question.jsx';

class Questions extends Component {
    constructor() {
        super();
        this.state = {
            restaurantId: '2',
            passedQuestions: [],
            questions: []
        }
    }


    componentDidMount() {
        this.onSubmitHandler();
    }

    onSubmitHandler() {
        // axios.get(`http://54.183.62.32:3000/api/questions/${this.state.restaurantId}`)
        axios.get(`/api/questions/${this.state.restaurantId}`)
            .then(({ data }) => {
                console.log('data:', data)
                this.setState({
                    questions: data,
                    passedQuestions: [data[0], data[1]]
                });
            })
            .catch(err => {
                console.log('Error getting data on client...', err);
            })
    }

    // onChangeHandler(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     }, () => console.log(this.state));
    // }

    conditionalRender() {
        const NoQuestion = styled.p`
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            margin-bottom: 12px;
        `;
        const Button = styled.button`
            display: inline-block;
            vertical-align: middle;
            margin: 0;
            cursor: pointer;
            border: 1px solid;
            font-weight: bold;
            text-align: center;
            font-size: 14px;
            line-height: 1.28571em;
            border-color: #ccc;
            color: #666;
            background-color: #f7f7f7;
            padding: 8px 19px 9px;
            border-radius: 3px;
            box-shadow: 0 1px 1px;
        `;
        if (this.state.questions.length === 0) {
            return (
                <div>
                    <NoQuestion>Yelp users haven't asked any questions yet about this restaurant.</NoQuestion> <br />
                    <Button>Ask a Question</Button>
                </div>
            )
        } else {
            return (
                <div>
                    {this.state.passedQuestions.map((question) => {
                        if (question !== undefined) {
                            return (
                                <div>
                                    <Question data={question.user_id} message={question.text} qid={question.id} />
                                </div>
                            )
                        }
                    })}
                    <br />
                    <a href="#">See all {this.state.questions.length} questions</a> <br />
                    <div>
                        <span>Dont see your question? Ask away!</span><br />
                        <button>Ask a question</button>
                    </div>
                </div>
            )
        }
    }

    render() {
        const Header = styled.h2`
            color: #d32323;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            border-bottom-color: #e6e6e6;
            border-bottom-width: 1px;
            border-bottom-style: solid;
        `;

        return (
            <div>
                {/* Enter Restaurant Id: <input name="restaurantId" onChange={(e) => this.onChangeHandler(e)} />
               <button onClick={() => this.onSubmitHandler()}>Get Questions</button> <br/> */}
                <Header>Ask The Community</Header>
                {this.conditionalRender()}
            </div>
        )
    }
}

export default Questions;
