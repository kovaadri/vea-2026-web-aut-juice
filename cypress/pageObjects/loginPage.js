import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get emailField() {
    return cy.get("input#email");
  }

  static get passwordField() {
    return cy.get("input#password");
  }

  static get loginButton() {
    return cy.get("#loginButton");
  }

  static get notYetCustomerLink() {
    return cy.get("[routerlink='/register']");
  }
}
