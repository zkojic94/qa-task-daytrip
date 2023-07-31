export default class CheckoutPage {
	// locators
    firstNameInput(){
        return cy.get('#adult_0_firstName');
    }

    lastNameInput(){
        return cy.get('#adult_0_lastName');
    }

    birthDayInput(){
        return cy.get('#date-input');
    }

    birthYearInput(){
        return cy.get('[data-cy="yearInput"]');
    }

    phoneNumberInput(){
        return cy.get('#phone');
    }

    travelForWorkCheckbox(){
        return cy.get('#2');
    }

    pickUpAddressInput(){
        return cy.get('#pickup-address');
    }

    dropOffAddressInput(){
        return cy.get('#drop-off-address');
    }

    confirmPaymentButton(){
        return cy.get('[data-cy="confirmPayment"]');
    }

    summaryTotalPriceTitle(){
        return cy.get('[data-cy="summaryTotalPrice"] > span');
    }
    
    // methods
    addPassengerFirstName(firstName){
        this.firstNameInput().type(firstName);
    }

    addPassengerLastName(lastName){
        this.lastNameInput().type(lastName);
    }
    
    addPassengerBirthdate(birthDay,birthMonth,birthYear){
        this.birthDayInput().type(birthDay);
        cy.contains(birthMonth).click();
        this.birthYearInput().type(birthYear);
    }
    
    addPassengerPhone(phone){
        this.phoneNumberInput().type(phone);
    }

    selectTravelForWorkCheckbox(){
        this.travelForWorkCheckbox().check();
    }

    enterPickupAddress(pickUpAddress){
        this.pickUpAddressInput().type(pickUpAddress);
    }

    enterDropOffAddress(dropOffAddress){
        this.dropOffAddressInput().type(dropOffAddress);
    }

    selectPaymentOption(paymentOption, price){
        cy.contains(paymentOption).click();
        this.confirmPaymentButton().contains(`Confirm your booking for ${price}`);
        this.confirmPaymentButton().click();
    }

    verifyTripSummaryTitle(title){
        cy.contains('h4', title).should('be.visible');
    }

    verifyFromLocationTitle(location){
        cy.contains('h6', location).should('be.visible');
    }

    verifyToLocationTitle(location){
        cy.contains('h6', location).should('be.visible');
    }

    verifyVehicleType(vehicleType){
        cy.contains('h4', vehicleType).should('be.visible');
    }

    verifySummaryTotalPrice(price){
        this.summaryTotalPriceTitle().should('be.visible').contains(price);
    }
}