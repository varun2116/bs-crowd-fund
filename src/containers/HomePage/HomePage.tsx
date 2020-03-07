import React, { Component } from 'react';
import Card from '../../components/Card';
import CardList from '../../components/CardList';
import Header from '../../components/Header';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <CardList />
            </React.Fragment>
        );
    }
}

export default HomePage;
