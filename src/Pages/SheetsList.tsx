import { Grid, GridCell } from "rmwc";
import * as React from "react";

export interface Sheet {
  id: string;
  title: string;
  description: string;
  rows: Array<Header>;
  columns: Array<Header>;
  signup_slots: Array<SignupSlot>;
  signups: Array<Signup>;
  isAdmin: boolean;
}

export interface Header {
  id: string;
  type: string;
  position: number;
  value: string;
}
export interface SignupSlot {
  id: string;
  row_id: string;
  column_id: string;
  max_signups: number;
  closed: boolean;
}
export interface Signup {
  id: string;
  signup_slot_id: string;
  name: string;
  comment: string;
}

export interface Props {
  sheetsList: Array<Sheet>;
}

function renderSheetList(sheetList: Array<Sheet>) {
  const sheets = sheetList.map((sheet: Sheet) => (
    <div className="sheet">
      <h4 className="sheet__title">{sheet.title}</h4>
      <h5 className="sheet__description">{sheet.description}</h5>
    </div>
  ));

  return <div className="sheets-list">{sheets}</div>;
}

const SheetsList = (props: Props) => (
  <Grid>
    <GridCell span="8">{renderSheetList(props.sheetsList)}</GridCell>
    <GridCell span="4">
      <p>OK</p>
    </GridCell>
  </Grid>
);

export default SheetsList;
