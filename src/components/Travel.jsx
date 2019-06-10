import React, {Component} from 'react'
import style from '../styles/styles'
import { Link } from 'react-router-dom'


class Travel extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div style={style.card}>
                <Link to={'/users/' + this.props.id}>
                    <img style={style.imgSizer} alt={this.props.destiny + ' por ' + this.props.price} src={this.props.imgpath}/>
                    <h1 style={style.center}>{this.props.destiny}</h1>
                    <h3 style={style.center}>{this.props.price}€.</h3>
                    <h3 style={style.center}>{this.props.discount ? `${this.props.discount}% de Descuento` : 'Descuento No Disponible'}</h3>
                    <small style={style.center}>Del {this.props.dateInit} al {this.props.dateTurn}</small>                
                </Link>                   
            </div>
        )
    }
}

export default Travel