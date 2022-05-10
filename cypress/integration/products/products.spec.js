describe("Desktop /products page", () => {
  beforeEach(() => {
    cy.visit("/products");
    cy.viewport(375, 670);
    cy.intercept("https://join-tsh-api-staging.herokuapp.com/products*").as(
      "products"
    );
  });

  it("Displays 4 products (or 8 for desktop) by default", () => {
    cy.get("main > :nth-child(2) > div").should("have.length", 4);
    cy.viewport(1280, 720);
    cy.wait(500);

    cy.wait("@products").then((interception) =>
      cy.wrap(interception.response.body.items).should("have.length", 8)
    );
    cy.get("main > :nth-child(2) > div").should("have.length", 8);
  });

  it("Products with promo tag have 'Promo' hint", () => {
    cy.get('label[for="promo"]:first').click();
    cy.wait("@products");
    cy.wait(500);

    cy.get("main > :nth-child(2) > div").each((el) => {
      if (el.has("span:contains('Promo')").length > 0) return true;
      throw new Error("Data doesn't match");
    });
  });

  it("Products with active tag don't have grayed out image and 'Unavailable' button", () => {
    cy.get('label[for="active"]:first').click();
    cy.wait("@products");

    cy.get("main > :nth-child(2) > div button").should(
      "not.contain",
      "Unavailable"
    );
    cy.get("main > :nth-child(2) > div img")
      .invoke("css", "filter")
      .should("not.contain", "grayscale(100%)");
  });

  it("Buttons with 'Unavailable' are disabled", () => {
    cy.contains("Unavailable").should("be.disabled");
  });

  it("Buttons open product info popup. Popup closes properly", () => {
    cy.contains("Show details").click();

    cy.get("main > :nth-child(2) > section");
    cy.get("main > :nth-child(2) > section svg").click();
    cy.get("main > :nth-child(2) > section").should("not.exist");
  });

  it("Pagination makes correct call", () => {
    cy.get("main > :last-child div button:nth-child(2)").click();
    cy.get("@products");
  });

  it("Search filter finds requested products", () => {
    cy.get('input[placeholder="Search"]').type("an");
    cy.wait("@products");
    cy.wait(500);
    cy.get("main > :nth-child(2) > div").each((el) => {
      if (
        el.has("h3:contains('an')").length > 0 ||
        el.has("p:contains('an')").length > 0
      )
        return true;
      throw new Error("Data doesn't match search query");
    });
  });

  it("If searched query doesn't exist, render special empty page", () => {
    cy.get('input[placeholder="Search"]').type("This query doesn't exist");
    cy.wait("@products");
    cy.wait(500);
    cy.get("main > :nth-child(2) div p").should(
      "contain",
      "There are no products on the list"
    );
  });
});
