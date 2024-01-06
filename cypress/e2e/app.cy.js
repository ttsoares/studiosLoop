import CREATIONS from "../../public/consts/creations";
import MENU from "../../public/consts/menu";
import SOCMED from "../../public/consts/social_med";

const CRE_2 = CREATIONS.map((elm) => {
  const arr = elm.imgDsk.split("/");
  const lastElm = arr[arr.length - 1];
  return { ...elm, imgDsk: lastElm };
});

describe("Navigation", () => {
  it("desktop: should navigate to the correct page", () => {
    cy.visit("/");

    //Nav
    MENU.forEach((elm) => {
      cy.get('[cy-test="nav"]').find(`a[cy-test="${elm.link}"]`).click();
      cy.url().should("include", elm.link);
      cy.get("h1").contains(elm.text);
    });

    //Footer
    MENU.forEach((elm) => {
      cy.get('[cy-test="footer"]').find(`a[cy-test="${elm.link}"]`).click();
      cy.url().should("include", elm.link);
      cy.get("h1").contains(elm.text);
    });
  });

  it("mobile: should navigate to the correct page", () => {
    cy.visit("/");
    cy.viewport("iphone-8", "portrait");

    MENU.forEach((elm) => {
      cy.get('[cy-test="nav"]').find(`[cy-test="burgerIcon"]`).click();

      cy.get('[cy-test="menu_sm"]').find(`p[cy-test="${elm.link}"]`).click();

      cy.url().should("include", elm.link);
      cy.get("h1").contains(elm.text);
    });
  });
});

describe("Images", () => {
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
    CRE_2.forEach((item) => {
      cy.get('[cy-test="creations"')
        .get(`[cy-test="${item.text}"]`)
        .should("have.attr", "src")
        .should("include", item.imgDsk);
    });

    //Footer
    cy.get('[cy-test="footer"')
      .find("img")
      .should("have.attr", "src")
      .should("include", "logo");

    SOCMED.forEach((elm) => {
      cy.get('[cy-test="footer"')
        .find(`img[cy-test="${elm.image}"]`)
        .should("have.attr", "src")
        .should("include", elm.image);
    });
  });
});

describe("Hover states", () => {
  it("Hover states", () => {
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

describe("Responsive design", () => {
  before(() => {
    cy.visit("/");
    cy.viewport("iphone-8", "portrait");
  });

  it("Burger open menu icon", () => {
    cy.get('[cy-test="nav"]')
      .find(`[cy-test="burgerIcon"]`)
      .should("be.visible");
  });

  it("Burger close menu icon", () => {
    cy.get('[cy-test="nav"]')
      .find(`[cy-test="burgerIcon"]`)
      .click()
      .find(`[cy-test="closeIcon"]`)
      .should("be.visible");
  });
});
