
// <reference types="cypress"/>
describe('Vehicle Insurance Application', () => {
    it(' Automobile Insurance ', () => {
     cy.Logintri()
    cy.wait(1000);
  }) 
      it('Enter Vehicle Data', () => {
        cy.nav_automobile();
        cy.Marca();
        cy.performance();
        cy.dateManufacturecalender();
        cy.numberofseats();        
        cy.fuel();        
        cy.listprice().type('1000');        
        cy.licenseplatenumber().type('teste');
        cy.annualmileage().type('1000');
        cy.nextenter();
       
  })
      it('Enter Insurant Data', () => {

        cy.firstname();
        cy.lastname();
        cy.birthdate();
        cy.ideal_radio();
        cy.country();
        cy.streetaddress();
        cy.zipcode();
        cy.city();
        cy.occupation();
        cy.group();
        cy.website()
        cy.nextenterproduct()
  })
      it('Enter Product Data', () => {
        cy.startdate();
        cy.insurancesum();
        cy.meritrating();
        cy.damageinsurance();
        cy.Optional_Products();
        cy.courtesycar();
        cy.nextselectpriceoption();
  })
      it('Select Price Option', () => {
        cy.idealRadio();
        cy.nextsendquote();
  })
      it('Send Quote', () => {
        cy.email();
        cy.phone();
        cy.username();
        cy.password();
        cy.confirmpassword();
        cy.Comments();
        cy.sendemail();
        cy.confirm();


    })
})

    
    
        
  
  