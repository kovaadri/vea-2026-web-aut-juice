import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
    }

    static get paymentList() {
        return cy.get("mat-table").find("mat-row");
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to review']")
    }
}