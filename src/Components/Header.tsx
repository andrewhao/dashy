import * as React from "react";
import {
  Toolbar,
  ToolbarRow,
  // ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarFixedAdjust
  // ToolbarIcon
} from "rmwc";

function Header() {
  return (
    <div className="header">
      <Toolbar fixed={true}>
        <ToolbarRow>
          <ToolbarMenuIcon use="menu" />
          <ToolbarTitle>Wejoinin</ToolbarTitle>
        </ToolbarRow>
      </Toolbar>
      <ToolbarFixedAdjust />
    </div>
  );
}
export default Header;
