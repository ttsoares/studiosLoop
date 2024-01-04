describe("Navigation", () => {
  it("should navigate to the correct page", () => {
    cy.visit("http://localhost:3000/");

    // Nav
    cy.get('[cy-test="nav"]').find('a[cy-test="/about"]').click();
    cy.url().should("include", "/about");
    cy.get("h1").contains("About");

    cy.get('[cy-test="nav"]').find('a[cy-test="/careers"]').click();
    cy.url().should("include", "/careers");
    cy.get("h1").contains("Careers");

    cy.get('[cy-test="nav"]').find('a[cy-test="/events"]').click();
    cy.url().should("include", "/events");
    cy.get("h1").contains("Events");

    cy.get('[cy-test="nav"]').find('a[cy-test="/products"]').click();
    cy.url().should("include", "/products");
    cy.get("h1").contains("Products");

    cy.get('[cy-test="nav"]').find('a[cy-test="/support"]').click();
    cy.url().should("include", "/support");
    cy.get("h1").contains("Support");

    //Footer
    cy.get('[cy-test="footer"]').find('a[cy-test="/about"]').click();
    cy.url().should("include", "/about");
    cy.get("h1").contains("About");

    cy.get('[cy-test="footer"]').find('a[cy-test="/careers"]').click();
    cy.url().should("include", "/careers");
    cy.get("h1").contains("Careers");

    cy.get('[cy-test="footer"]').find('a[cy-test="/events"]').click();
    cy.url().should("include", "/events");
    cy.get("h1").contains("Events");

    cy.get('[cy-test="footer"]').find('a[cy-test="/products"]').click();
    cy.url().should("include", "/products");
    cy.get("h1").contains("Products");

    cy.get('[cy-test="footer"]').find('a[cy-test="/support"]').click();
    cy.url().should("include", "/support");
    cy.get("h1").contains("Support");
  });

  it("Test images", () => {
    cy.visit("http://localhost:3000/");

    // Nav
    cy.get('[cy-test="nav"')
      .find("img")
      .should("have.attr", "src")
      .should("include", "logo");

    //Hero
    cy.get('[cy-test="hero"')
      .find("img")
      .should("have.attr", "src")
      .should("include", "image-hero");

    // Feature
    cy.get('[cy-test="feature"')
      .find("img")
      .should("have.attr", "src")
      .should("include", "image-interactive");

    // Creations
    cy.get('[cy-test="creations"')
      .get('[cy-test="Deep Earth"]')
      .should("have.attr", "src")
      .should("include", "deep");

    cy.get('[cy-test="creations"')
      .get('[cy-test="Night Arcade"]')
      .should("have.attr", "src")
      .should("include", "arcade");

    cy.get('[cy-test="creations"')
      .get('[cy-test="Soccer Team VR"]')
      .should("have.attr", "src")
      .should("include", "team");

    cy.get('[cy-test="creations"')
      .get('[cy-test="The Grid"]')
      .should("have.attr", "src")
      .should("include", "grid");

    cy.get('[cy-test="creations"')
      .get('[cy-test="From Up Above VR"]')
      .should("have.attr", "src")
      .should("include", "above");

    cy.get('[cy-test="creations"')
      .get('[cy-test="Pocket Borealis"]')
      .should("have.attr", "src")
      .should("include", "borealis");

    cy.get('[cy-test="creations"')
      .get('[cy-test="The Curiosity"]')
      .should("have.attr", "src")
      .should("include", "curiosity");

    cy.get('[cy-test="creations"')
      .get('[cy-test="Make It Fisheye"]')
      .should("have.attr", "src")
      .should("include", "fisheye");

    //Footer
    cy.get('[cy-test="footer"')
      .find("img")
      .should("have.attr", "src")
      .should("include", "logo");

    cy.get('[cy-test="footer"')
      .find('img[cy-test="/imgs/icon-facebook.svg"]')
      .should("have.attr", "src")
      .should("include", "facebook");

    cy.get('[cy-test="footer"')
      .find('img[cy-test="/imgs/icon-twitter.svg"]')
      .should("have.attr", "src")
      .should("include", "twitter");

    cy.get('[cy-test="footer"')
      .find('img[cy-test="/imgs/icon-pinterest.svg"]')
      .should("have.attr", "src")
      .should("include", "pinterest");

    cy.get('[cy-test="footer"')
      .find('img[cy-test="/imgs/icon-instagram.svg"]')
      .should("have.attr", "src")
      .should("include", "instagram");
  });

  // Hover over images
  it.only("Hover states", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[cy-test="Deep Earth"]')
      .realHover("mouse")
      .get('[cy-test="overlay-Deep Earth"]')
      .should("be.visible");

    cy.get('[cy-test="Night Arcade"]')
      .realHover("mouse")
      .get('[cy-test="overlay-Night Arcade"]')
      .should("be.visible");

    cy.get('[cy-test="Soccer Team VR"]')
      .realHover("mouse")
      .get('[cy-test="overlay-Soccer Team VR"]')
      .should("be.visible");

    cy.get('[cy-test="The Grid"]')
      .realHover("mouse")
      .get('[cy-test="overlay-The Grid"]')
      .should("be.visible");

    cy.get('[cy-test="From Up Above VR"]')
      .realHover("mouse")
      .get('[cy-test="overlay-From Up Above VR"]')
      .should("be.visible");

    cy.get('[cy-test="Pocket Borealis"]')
      .realHover("mouse")
      .get('[cy-test="overlay-Pocket Borealis"]')
      .should("be.visible");

    cy.get('[cy-test="Make It Fisheye"]')
      .realHover("mouse")
      .get('[cy-test="overlay-Make It Fisheye"]')
      .should("be.visible");
  });
});
