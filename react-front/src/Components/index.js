import ButtonAppBar from './ButtonAppBar';
import MainView from './MainView';
import React from 'react';



class Home extends React.Component {

    render() {
        return (
            <div className="home-page">
                <ButtonAppBar />
                <MainView />

            </div>
        );
    }
}

export default Home;