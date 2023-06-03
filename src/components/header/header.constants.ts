import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { NavigateFunction, Params } from "react-router-dom";

export interface IHeaderProps {
  router: {
    location: Location;
    navigate: NavigateFunction;
    params: Readonly<Params<string>>;
  };
  handleSearchValueChange: ActionCreatorWithPayload<
    string,
    "menu/handleSearchValueChange"
  >;
}
export interface IHeaderStates {
  width: number;
  isMobileWidth: boolean;
  openMenu: boolean;
  toggleSearch: boolean;
  searchVal: string;
}
