///<reference types="cypress"/>
describe("welcome magneto.software testing board project",()=>{
it('Mangento website', () => {
    cy.visit("https://magento.softwaretestingboard.com/")
    cy.get('a[href="https://magento.softwaretestingboard.com/men.html"]').click()
    cy.get('li[class="item"]').each((element,index,list)=>{

        if(element.text().includes("Hoodies & Sweatshirts")){
            cy.wrap(element).click()
        }
    })
    //
    cy.get(':nth-child(6) > .field > .control > #limiter').select('36')
    let total=0;
    cy.get('.product .details').as("product").find('.price').as("I_price")
    cy.get("@I_price").invoke("text").as("Price")
    cy.get("@Price").then((p_elemet)=>{
let price_elemnt=p_elemet.split('$')
let new_price

// print the price before and after discount
for(let i=1;i<price_elemnt.length;i++)
{
    new_price=Number(price_elemnt[i])-0.1*Number(price_elemnt[i])
    cy.log("price of  before discount :"+price_elemnt[i])
    cy.log("price after discount :"+new_price)
    total+=Number(price_elemnt[i])
cy.log("-------------------------")
}

cy.log("total is: "+total)
    })
});

//print the first 3 letters 
it.only('print the first letters of items', () => {
//go to website
    cy.visit("https://magento.softwaretestingboard.com/")

    //select the Hoodies & Sweatshirts
    cy.get('a[href="https://magento.softwaretestingboard.com/men.html"]').click()
    cy.get('li[class="item"]').each((element,index,list)=>{

        if(element.text().includes("Hoodies & Sweatshirts")){
            cy.wrap(element).click()
        }
    })
    //to show all items 
    cy.get(':nth-child(6) > .field > .control > #limiter').select('36')
    cy.get('.product .details').as("product_name").find('.product-item-link').as("I_name")
    // to print the first 3 letters
    cy.get("@I_name").then((element)=>{

        let name_3letter
        for(let i=0;i<element.length;i++){
            name_3letter=element.eq(i).text().trim().substring(0, 3)
            cy.log( name_3letter)
        }
    })
  

    
 
 
  
    

  })
    
});
