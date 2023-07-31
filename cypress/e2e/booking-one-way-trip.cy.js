import * as testData from "../fixtures/testData.json";

import SharedObjects from '../support/page-objects/shared-objects';
import HomePage from '../support/page-objects/home-page';
import ConfiguratorPage from '../support/page-objects/configurator-page';
import BookingPage from '../support/page-objects/booking-page';
import CheckoutPage from '../support/page-objects/checkout-page';

const sharedObjects = new SharedObjects();
const homePage = new HomePage();
const configuratorPage = new ConfiguratorPage();
const bookingPage = new BookingPage();
const checkoutPage = new CheckoutPage();

describe('Booking flow', () => {

  before('Visit link', () => {
    cy.visit('/');
  });

  it('Should book a one way trip', { scrollBehavior: 'center' }, () => {
    // Home page
    sharedObjects.selectFromLocation(testData.fromLocation);
    sharedObjects.selectToLocation(testData.toLocation);
    homePage.selectDepartureDate();
    homePage.clickSearchButton();
    // Configurator page 
    sharedObjects.verifyPageUrl(testData.tripConfiguratorUrl);
    sharedObjects.verifyFromLocationValue(testData.fromLocation);
    sharedObjects.verifyToLocationValue(testData.toLocation);
    configuratorPage.bookYourTrip(testData.tripPrice);
    configuratorPage.bookWithoutSights();
    // Booking page
    sharedObjects.verifyPageUrl(testData.bookingUrl);
    bookingPage.submitContactEmail(testData.email);
    // Checkout page
    sharedObjects.verifyPageUrl(testData.checkoutUrl);
    sharedObjects.verifyPageTitle(testData.checkoutTitle);
    checkoutPage.verifyTripSummaryTitle(testData.tripSummaryTitle);
    checkoutPage.verifyFromLocationTitle(testData.fromLocation);
    checkoutPage.verifyToLocationTitle(testData.toLocation);
    checkoutPage.verifyVehicleType(testData.vehicleType);
    checkoutPage.verifySummaryTotalPrice(testData.tripPrice);
    checkoutPage.addPassengerFirstName(testData.firstName);
    checkoutPage.addPassengerLastName(testData.lastName);
    checkoutPage.addPassengerBirthdate(testData.birthDay, testData.birthMonth, testData.birthYear);
    checkoutPage.addPassengerPhone(testData.phone);
    checkoutPage.selectTravelForWorkCheckbox();
    checkoutPage.enterPickupAddress(testData.pickUpAddress);
    checkoutPage.enterDropOffAddress(testData.dropOffAddress);
    checkoutPage.selectPaymentOption('Cash', testData.tripPrice);
    // Booking Confirmation page
    sharedObjects.verifyPageUrl(testData.bookingConfirmationUrl);
    sharedObjects.verifyPageTitle(testData.bookingConfirmedTitle);
  })
})