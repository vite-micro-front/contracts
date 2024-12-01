import { Store } from "redux";
import { BoardId } from "./kernel";
import { combineSlices } from "@reduxjs/toolkit";

type Routes = {
  home: string;
  board: (id: BoardId) => string;
};

export type GlobalContext = {
  store: Store;
  rootReducer: ReturnType<typeof combineSlices>;
  routes: Routes;
};
