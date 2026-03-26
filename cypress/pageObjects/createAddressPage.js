import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
    static get url() {
        return "/#/address/create";
    }

    static get newAddressForm() {
        return cy.get("div#address-form");
    }

    static get submitButton() {
    return cy.get("button#submitButton");
  }
}