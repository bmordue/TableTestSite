describe("test site", () => {
  it("check the details page for each row", () => {
    cy.visit("/");
    cy.get("table").should("exist");

    cy.get(`tbody > tr`).each(($row) => {
      cy.wrap($row).find("a").click();
      cy.contains("describes").should("be.visible");
      cy.contains("Back").click();
    });
  });
});
