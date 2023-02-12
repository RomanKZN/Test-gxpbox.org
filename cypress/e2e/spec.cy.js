describe("Test to GetExperience", () => {
  it("H1 text should be visible", () => {
    cy.visit("/");
    cy.get(".col-auto > .q-btn > .q-btn__content > .block").click();
    cy.contains("Experiences at the best prices in all countries").should(
      "be.visible"
    );
    cy.get(".text-grey-7 > :nth-child(1)").click();
    cy.get('input[type="search"]').type("Dubai, United Arab Emirates");
    cy.get(".q-virtual-scroll__content > .q-item").click();
    cy.get(".q-form > .q-btn--unelevated > .q-btn__content").click();

    const normalizeText = (s) => s.replace(/\s/g, "").toLowerCase();

    // will keep text from title element
    let titleText;
    cy.get('div[title="test"]').then(($title) => {
      // save text from the first element
      titleText = normalizeText($title.text());
      //expect(titleText).to.eq("Exp every hour and private group");
    });
    cy.get(
      "#q-app > div > div > main > div.q-mb-md.full-width > div.row.no-wrap > div > div.row.list-wrapper.q-col-gutter-md > div:nth-child(2) > a > div > div:nth-child(2) > div > div.col-12.flex.items-baseline.justify-between.no-wrap > div > div.ellipsis-2-lines.text-lg.text-weight-semibold"
    ).click();

    cy.get('h1[class="text-h5 text-bold q-mb-md"]').should(($identifier) => {
      // we can massage text before comparing
      const idText = normalizeText($identifier.text());

      // text from the title element should already be set
      expect(idText, "ID").to.equal(titleText);
    });
  });
  it("cy.viewport() - set the viewport size and dimension", () => {
    cy.visit("/");
    cy.get(".col-auto > .q-btn > .q-btn__content > .block").click();
    cy.viewport("macbook-15");
    cy.wait(200);
    cy.viewport("macbook-13");
    cy.wait(200);
    cy.viewport("macbook-11");
    cy.wait(200);
    cy.viewport("iphone-6");
    cy.wait(200);
    cy.viewport("iphone-5");
    cy.wait(200);
    cy.viewport("iphone-4");
    cy.wait(200);
  });
});
