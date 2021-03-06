import React from "react";
import { render, cleanup } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";
import Friends from "./friends.component";
import { SnackbarProvider } from "notistack";

describe("Friends", () => {
    afterAll(cleanup);
    const{ container } = render(
        <SnackbarProvider>
            <Router>
                <Friends />
            </Router>
        </SnackbarProvider>
    );

    test("renders without crashing", () => {
        expect(container).toBeTruthy();
    });

    test("renders with styled components", () => {
        expect(document.querySelector(".friends-list")).toBeTruthy();
        expect(document.querySelector(".groups-list")).toBeTruthy();        
    });
});