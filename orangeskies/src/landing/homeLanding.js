import React, { useState } from 'react';
import './homeLanding.css'
import Nagivation from '../navigation/navigation.js';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Label
} from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import ImageGallery from 'react-image-gallery';

{/*
{
  original: 'https://www.utahrealestate.com/site/img/common/marquee-08.jpg',
  srcSet: 'https://www.utahrealestate.com/site/img/common/marquee-08.jpg 2100w',
  sizes: "(min-width: 400px) 600px, 100vw",
},
{
  original: 'https://www.utahrealestate.com/site/img/common/marquee-08.jpg',
  srcSet: 'https://www.utahrealestate.com/site/img/common/marquee-08.jpg 2100w',
  sizes: "(min-width: 400px) 600px, 100vw",
}
*/}

const images = [
  {
    original: 'https://www.utahrealestate.com/site/img/common/marquee-08.jpg',
    srcSet: 'https://www.utahrealestate.com/site/img/common/marquee-08.jpg 2100w',
  },
]

const thumb = false;

class MyGallery extends React.Component {

  render() {
    return (
      <div className="ImageGallery">
        <ImageGallery items={images} showThumbnails={thumb} lazyLoad={true} showFullscreenButton={thumb} showNav={thumb} useBrowserFullscreen={thumb} />
      </div>
    )
  }
}
class HomeLanding extends React.Component {
  render()
  {
    return(
      <div>
        <Nagivation/>
       <div>
        <MyGallery/>
       </div>
      </div>
    )
  }
}

export default HomeLanding;
