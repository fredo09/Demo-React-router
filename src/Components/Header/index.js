import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <Link class="navbar-item" to="/">
                            Home
                        </Link>

                        <Link class="navbar-item" to="/Documentacion">
                            Documentation
                        </Link>
                        <Link class="navbar-item" to="/Acerca">
                            Acerca de
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;