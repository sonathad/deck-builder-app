import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import MainPage from "../pages/MainPage";

describe("MainPage", () => {
    test("greets", () => {
        render(<MainPage />);
        const title = screen.getByText("Deck Builder");
        expect(title).toBeDefined();
    });
});