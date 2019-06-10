import React, {Component} from 'react'
import travelController from '../controllers/travels'

class Detail extends Component {
    constructor(props) {
        super()
        this.state = {
            data: {}
        }

        travelController.getTravels(this.props.match.params.i)
        .then(res => {            
            this.setState({
                data: res.data.results
            })
            
            console.log(this.state, 'CONSOLE DE STATE');
        })
    }

    render () {
        return (
        <div>
            <h1>FUNCIONA {this.props.match.params.i}</h1>
            <h1>DESTINO: {this.state.data}</h1>
        </div>
        )
    }
}

export default Detail