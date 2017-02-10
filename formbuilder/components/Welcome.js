import React from "react";


export default function Welcome(props) {
  const createNewForm = () => {
    props.resetForm(() => {
      props.history.pushState(null, "/builder");
    });
  };

  return (
    <div>
      <div className="jumbotron background">
        <div className="container">
        <h1>Create your own Test</h1>
        <p>
            This is the <strong>True Testar</strong>, a tool to help
            you create Tests Online.
        </p>
        <p><button type="button" onClick={createNewForm} className="btn btn-primary btn-lg">Start a new Test</button></p>
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-md-4">
          <h3><i className="glyphicon glyphicon-eye-close"></i> Title - One</h3>

          <p>We are here to bear all your testing burdens. Just put it on Us we will deliver</p>
        </div>
        <div className="col-md-4">
          <h3><i className="glyphicon glyphicon-heart-empty"></i> Second - Title</h3>
          
          <p>True Testar is here to Stay</p>
        </div>
        <div className="col-md-4">
          <h3><i className="glyphicon glyphicon-saved"></i> Third - Title</h3>
          <p>Writ stuff here </p>
        </div>
        </div>
      </div>
    </div>
  );
}
