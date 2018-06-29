import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';


class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionId: '',
            user_id: '',
            text: '',
            imageUrl: '',
            answers: [],
            answerId: '',
            time: '',
            helpful: ''
        }
    }

    componentDidMount() {
        this.getAnswers();
    }

    getPhoto() {
        // axios.get(`http://54.183.62.32:3000/api/getPhoto/${this.state.user_id}`)
        // axios.get(`http://localhost:3000/api/getPhoto/${this.state.user_id}`)
        //   .then(({data}) => {
        //     //   console.log('Image data from user_id', data);
        //       this.setState({
        //           imageUrl: data.imageUrl,
        //       })

        //   })
        //   .catch(err => {
        //       console.log('Error getting photo for user...', err);
        //   })
    }

    getAnswers() {
        console.log('this.props.id:', this.props.id)
        // axios.get(`http://54.183.62.32:3000/api/getAnswers/${this.props.id}`)
        axios.get(`http://localhost:3000/api/getAnswers/${this.props.id}`)
            .then(({ data }) => {
                console.log('data', data)
                this.setState({
                    answers: [...this.state.answers, data[0]],
                    text: data[0].text,
                    user_id: data[0].user_id,
                    time: data[0].createdAt,
                    helpful: data[0].helpful
                }, () => this.getPhoto());
            })
            .catch(err => {
                console.log('Error getting answer back from the server', err);
            })
    }

    conditionalRenderHelpful() {
        if (this.state.helpful === null) {
            return '';
        } else if (this.state.helpful === 1) {
            return '• 1 person found this helpful';
        } else {
            return `• ${this.state.helpful} people found this helpful`;
        }
    }


    render() {
        // console.log('State check in Answers...', this.state)
        const Answer = styled.div`
          margin-left: 6px;
          margin-rigth: 6px;
          border-collapse: collapse;
          border-spacing: 0 0;
          vertical-align: top;
        `

        const Text = styled.p`
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 16px;
          vertical-align: top;
          margin-left: 40px;
        `

        const Time = styled.span`
        //    margin-left: 35px;
           font-size: 12px;
           line-height: 1.5em;
           color: #999;
           vertical-align: top;
           padding-top: 5px;
        //    padding-bottom: 8px;
           display: inline-block;
        `

        const Image = styled.img`
            margin-top: 3px;
            border-radius: 4px
            height: 30px;
            width: 30px;
            float: left;
        `
        const NoAnswer = styled.p`
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            margin-bottom: 5px;
        `

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

        return (
            this.state.answers.length > 0 ?
                <Answer>
                    <Image src={this.state.imageUrl} />
                    <Text>{this.state.text} <br />
                        <Time>{moment(this.state.time).fromNow()} {this.conditionalRenderHelpful()} </Time> <br />
                    </Text>
                    <a href="#">View {this.state.answers.length} more answer</a>
                </Answer>
                :
                <div>
                    <NoAnswer>Yelp users haven't answered this question yet</NoAnswer><br />
                    <Button>Answer</Button>
                </div>
        )
    }
}

export default Answers;

