import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
    static get url() {
        return "/#/delivery-method";
    }

    static get deliveryList() {
        return cy.get("mat-table").find("mat-row");
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to delivery method selection']")
    }
}