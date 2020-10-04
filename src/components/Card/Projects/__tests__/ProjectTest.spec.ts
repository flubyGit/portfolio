import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

import bootstrapClone from "../../../../assets/images/clones/bootstrap.png";
import CardProject from "../index";

describe("Testing component CardProject", () => {
  const card = CardProject({
    description: "Clonando a interface web do linkedin",
    image: bootstrapClone,
    text: "Clonando a interface web do linkedin",
    url: "https://ui-clone-linkedin.flubygit.vercel.app/",
  });
  let text: string;

  afterAll(() => {
    text = "Clonando a interface web do linkedin";
  });

  beforeAll(() => (text = ""));

  afterEach(cleanup);

  it("Must render prop image", () => {
    const { getByTestId } = render(card);

    expect(getByTestId("image")).toBeDefined();
    expect(getByTestId("image")).not.toHaveClass();
    expect(getByTestId("image")).toBeVisible();
    expect(getByTestId("image")).not.toBeNull();
    expect(getByTestId("image")).toHaveAttribute("src", bootstrapClone);
  });

  it("Must render prop text and description", () => {
    const { getByTestId } = render(card);
    const type = typeof text;

    expect(typeof getByTestId("text").textContent).toEqual(type);
    expect(getByTestId("text")).toBeVisible();
    expect(getByTestId("text")).not.toBeNull();
    expect(getByTestId("text")).toHaveTextContent(
      "Clonando a interface web do linkedin"
    );
  });

  it("Must render container card project", () => {
    const { getByTestId } = render(card);

    expect(getByTestId("wrapper")).toBeDefined();
    expect(getByTestId("text")).toBeVisible();
    expect(getByTestId("wrapper")).toBeInTheDocument();
  });
});
