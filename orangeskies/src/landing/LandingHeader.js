import React from "react";
import home from "./home.JPG"
// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            width: "100%",
            height: "800px",
            backgroundImage: "url(" + home + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">Find your sweet home.</h1>
            <div className="text-center">
              <form>
                <input
                  placeholder="Search for..."

                />
              </form>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
