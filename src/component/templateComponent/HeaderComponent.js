import React from "react";

const HeaderComponent = (props) => {
  const {} = props;

  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="ql_logo_nav col-md-9 col-xs-12">
            <div className="logo_container">
              <a href="#" className="ql_logo google-font">
                ShopSite
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
