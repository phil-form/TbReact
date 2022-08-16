import {Component} from "react";

export default class MultiNumberClass extends Component
{
    static defaultProps = {
        multiplier: 2
    };

    constructor(props) {
        super(props);
        this.state = {
            nb: 1
        };
    }

    handleMulti = () =>
    {
        this.setState((state, props) => ({
            nb: state.nb * props.multiplier
        }));
    }

    handleReset = () =>
    {
        this.setState((state, props) => ({
            nb: 1
        }));
    }

    render()
    {
        const { multiplier } = this.props;
        const { nb } = this.state;

        return (
            <>
                <h3>Multiplication par {multiplier} (class)</h3>
                <div>
                    <p>Valeur : {nb} </p>
                    <button onClick={this.handleMulti}>x {multiplier}</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </>
        );
    }
}
