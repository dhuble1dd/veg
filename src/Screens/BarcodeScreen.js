import React from "react";
import { Provider } from "react-redux";
import { BarcodeScanner } from "../components/BarcodeScanner";
import { store } from "../redux/store";

export const BarcodeScreen = () => {
    return(
        <Provider store={store}>
            <BarcodeScanner/>
        </Provider>
    )
}