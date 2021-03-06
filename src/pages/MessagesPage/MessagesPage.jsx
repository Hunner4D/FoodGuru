import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { Header } from "semantic-ui-react";

import "./MessagesPage.css";

const MessagesPage = (props) => {
  return (
    <div className="MessagesPage">
      <NavBar
        user={props.user}
        handleSignupOrLogin={props.handleSignupOrLogin}
        handleLogout={props.handleLogout}
        searchRequest={props.searchRequest}
        clearYelpGrabs={props.clearYelpGrabs}
        history={props.history}
        lat={props.lat}
      />

      <div className="ui container LPbody">
        <div className="flexButtons">
          <button
            className="ui segment syncButton"
            onClick={props.syncLocation}
          >
            Sync Location
          </button>
          <Link to="/messages" className="darkText">
            <button className="ui segment syncButton">
              Connect with a Guru!
            </button>
          </Link>
        </div>
        <Header
          as="h5"
          content="under construction!"
          inverted
          style={{
            fontWeight: "normal",
            marginTop: 80,
            marginBottom: 70,
            fontSize: 15,
            textAlign: "center",
          }}
        />
      </div>
    </div>
  );
};

export default MessagesPage;
