import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ScannedcodePage } from "../components/ScannedCodePage";

export const ScannedScreen = () => {
    return(
        <Provider store={store}>
            <ScannedcodePage/>
        </Provider>
    )
}