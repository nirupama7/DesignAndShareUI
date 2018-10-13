import React,{Component} from 'react';
import header from './header.png';
import { Navbar} from 'react-bootstrap';
import {NavbarBrand} from 'reactstrap';
class Header extends Component {
    render() {
        return (
            <Navbar fixedTop style={{backgroundColor:'black'}}>

                <NavbarBrand>
                    <img src={header} style={{"width": '150px', "height": '20px'}} alt=""/>
                </NavbarBrand>

            </Navbar>
        );
    }
}


export default Header;
