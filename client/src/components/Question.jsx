import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Answers from './Answers.jsx';

const Question = (props) => {
        const ListItem = styled.div`
            border-bottom-color: #e6e6e6;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            margin: 0px;
            padding: 8px 0;
            padding-bottom: 17px;
            align-items: flex-start;
        `
        return (
            <div>
                <ListItem>
                <h3 >{props.message}</h3>
                <Answers id={props.qid} />
                </ListItem>
            </div>
        )
}

export default Question;