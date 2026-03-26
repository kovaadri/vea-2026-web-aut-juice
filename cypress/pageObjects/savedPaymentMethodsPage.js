import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get url() {
        return "/#/saved-payment-methods";
    }

    static get newCardPanel() {
        return cy.get("mat-expansion-panel");
    }

    static get submitButton() {
        return cy.get("button#submitButton");
    }

    static get savedPaymentList() {
        return cy.get("mat-table").find("mat-row");
    }

    static get expiryMonth() {
        return cy.get("select#mat-input-4");
    }

    static get expiryYear() {
        return cy.get("select#mat-input-5");
    }
}