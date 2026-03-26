import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
    static get url() {
        return "/#/address/saved";
    }

    static get addNewAddress() {
        return cy.get("button[routerlink=\"/address/create\"]");
    }

    static get savedAddressList() {
        return cy.get("mat-table").find("mat-row");
    }
}