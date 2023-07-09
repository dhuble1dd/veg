import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Barcode from "../components/barcode";

export const Bcscrn = () => {
    return(
        <Provider store={store}>
            <Barcode/>
        </Provider>
    )
}