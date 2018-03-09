/// <reference path="./typings/data.d.ts" />

import * as React from "react";
import "./App.css";

import { RMWCProvider } from "rmwc";
import SheetsList from "./Pages/SheetsList";
import Header from "./Components/Header";

interface HeaderState {
  sheetsList: Array<any>;
}

interface HeaderProps {}

class App extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      sheetsList: []
    };
  }

  componentDidMount() {}
  render() {
    return (
      <RMWCProvider>
        <div className="App">
          <Header />
          <SheetsList sheetsList={this.state.sheetsList} />
        </div>
      </RMWCProvider>
    );
  }
}

export default App;
