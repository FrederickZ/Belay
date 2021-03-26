/* ------------------------------------------------------------
                    App Controller                               
------------------------------------------------------------ */

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="app">
                <h1>Welcome to Belay!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));