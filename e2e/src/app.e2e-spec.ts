import { AppPage } from './app.po';
import { browser, logging, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  it('should start app with landing page',()=>{
    browser.get('/');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4205/');
    browser.sleep(1000);
  })

  it('should display `Product Catalog` as Page Title',()=>{
    let toolbar = browser.element(by.css('mat-toolbar'));
    let title = toolbar.getText();
    expect(title).toEqual('Product Catalog');
    browser.sleep(1000);
  })

  it('should display product cards on landing page',()=>{
    expect(browser.isElementPresent(by.css('mat-card')))
    .toBeTruthy('landing page should display product as card');
  })

  it('should have link to navigate to add product page',()=>{
    let addProductLink = browser.element(by.css('a'));
    addProductLink.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4205/addProduct');
    browser.sleep(1000);    
  })

  it('should display add product form with blank inputs', ()=>{
    let productForm = browser.element(by.css('.product-form'));
    expect(productForm).toBeTruthy('add product page should have form to add products');

    let productName = browser.element(by.name('productName'));
    expect(productName).toBeTruthy('add product page should have input element for product name');
    expect(productName.getText()).toBe('');

    
    let company = browser.element(by.name('company'));
    expect(company).toBeTruthy('add product page should have input element for company');
    expect(company.getText()).toBe('');

    
    let price = browser.element(by.name('price'));
    expect(price).toBeTruthy('add product page should have input element for product price');
    expect(price.getText()).toBe('');

  })

  it('should add product and navigate back to landing page',()=>{
    let productName = browser.element(by.name('productName'));
    productName.sendKeys('12MP Camera');

    let company = browser.element(by.name('company'));
    company.sendKeys('Samsung');

    let price = browser.element(by.name('price'));
    price.sendKeys('2500');

    let submitButton = browser.element(by.css('#addButton'));
    submitButton.click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:4205/');
    browser.sleep(1000);
  })  


});
