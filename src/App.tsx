import * as React from "react";
import "./App.css";

import {
  Toolbar,
  ToolbarRow,
  // ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarFixedAdjust
  // ToolbarIcon
} from "rmwc/Toolbar";
import { Grid, GridCell } from "rmwc/Grid";
import { RMWCProvider } from "rmwc/Provider";

class App extends React.Component {
  render() {
    return (
      <RMWCProvider>
        <div className="App">
          <Toolbar fixed={true}>
            <ToolbarRow>
              <ToolbarMenuIcon use="menu" />
              <ToolbarTitle>Wejoinin</ToolbarTitle>
            </ToolbarRow>
          </Toolbar>
          <ToolbarFixedAdjust />
          <Grid>
            <GridCell span="8">
              <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to
                reload.
              </p>
            </GridCell>
            <GridCell span="4">
              <p>OK</p>
            </GridCell>
          </Grid>
        </div>
      </RMWCProvider>
    );
  }
}

export default App;
