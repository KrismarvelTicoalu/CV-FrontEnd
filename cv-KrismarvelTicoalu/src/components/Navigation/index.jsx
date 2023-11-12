import { Slide } from 'react-reveal'
import { NavItem } from '../NavigationItem'

export const Navigation = () => {
  return (
    <div>
        <Slide left>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Start Bootstrap</span>
            <span className="d-none d-lg-block">
                <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="https://i.imgur.com/PfdKFLy.png" alt />
            </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <Slide left>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavItem title="About" href="#about" />
                    </li>
                    <li className="nav-item">
                    <NavItem title="Education" href="#education" />
                    </li>
                    <li className="nav-item">
                    <NavItem title="Skills" href="#skills" /> 
                    </li>
                    <li className="nav-item">
                    <NavItem title="Interests" href="#interests" />
                    </li>
                    <li className="nav-item">
                    <NavItem title="Awards" href="#awards" />
                    </li>
                </ul>
                </div>
            </Slide>
        </nav>
    </Slide>
    </div>
  )
}
