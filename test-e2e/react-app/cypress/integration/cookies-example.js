describe("Accept cookies button", () => {
  const COOKIES_BUTTON = "#accept-cookies";

  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit("/");
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("should be visible", () => {
    cy.get(COOKIES_BUTTON).should("be.visible");
  });

  it("should not be visible after clicked", () => {
    cy.get(COOKIES_BUTTON).click();
    cy.get(COOKIES_BUTTON).should("not.be.visible");
  });

  it("should not be visible after reloading", () => {
    cy.get(COOKIES_BUTTON).should("not.be.visible");
  });
});
