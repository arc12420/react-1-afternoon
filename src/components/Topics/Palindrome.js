import React, { Component } from 'react'

export default class Palindrome extends Component{

    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        };
    }

    render(){
        return (
            <div className="puzzleBox palindromePB">
                <h4> Palindrome</h4>
                <input className="inputLine"/>
                <button className="confirmationButton"> Check</button>
                <span className="resultsBox"></span>
            </div>
        )
    }
}