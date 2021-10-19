import { Component } from "react";
import NumberInputs from "./NumberInputs";
import RadioInputs from "./RadioInputs";
import RadioInputs2 from "./RadioInputs2";
import Outputs from "./Outputs";

class Form extends Component {
    constructor() {
        super()
        this.state = {
            mode: "PMT",
            inputPMT: "",
            inputRATE: "",
            inputGROW: "",
            inputNPER: "",
            inputPV: "",
            inputFV: "",
            mode2: "BEGIN",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked}) : this.setState({ [name]: value })
    }

    render() {
        return(
            <div class="main">
                <RadioInputs
                    handleChange = {this.handleChange}
                    data = {this.state}  
                />

                <NumberInputs
                    handleChange = {this.handleChange}
                    data = {this.state}
                />

                <RadioInputs2
                    handleChange = {this.handleChange}
                    data = {this.state}  
                />

                <Outputs
                    data = {this.state}
                />
            </div>
        )
    }
}

export default Form