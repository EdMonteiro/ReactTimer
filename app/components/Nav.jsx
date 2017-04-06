var React = require("react");
var{Link, IndexLink} = require("react-router");

var Nav = () =>{
        return(
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                    <li><Link to="/" activeClassName="active-link">Countdown</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">Createad by <a href="https://www.linkedin.com/in/ed-monteiro-42b3a8a7/" target="_blank">Ed Monteiro</a></li>
                </ul>
            </div>
        </div>
        )
};

module.exports = Nav;