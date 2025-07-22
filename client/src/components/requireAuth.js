import { Component } from "react";
import { connect } from "react-redux";
import React from "react";

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    //component just rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    //component just get updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
