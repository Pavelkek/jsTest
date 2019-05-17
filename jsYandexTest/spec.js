

//import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
describe('Test Yandex', function() {
  
  //browser.ignoreSynchronization = true;
  var geoButton = element(by.css('span.geolink__reg'));
  var town = element(by.css('input#city__front-input.input__control.input__input'));
  var moreButton = element(by.css("a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher"));
  var moreContent = element(by.css("div.home-tabs__more"));
  beforeEach(async function() {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://yandex.ru/');
    console.log("before");
  });

  it('should add one and two',async function() {
    
    console.log("it");
    await geoButton.click();
    await town.click();
    await town.clear();
    await town.sendKeys('Лондон');
    browser.sleep(1000); //не заю, почему, но приходится браузер слипать, иначе интер не работает
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    browser.sleep(1000);
    await moreButton.click();
    browser.sleep(1000);
    var londonMore = moreContent.getText();
    await geoButton.click();
    await town.click();
    await town.clear();
    await town.sendKeys('Париж');
    browser.sleep(1000);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    browser.sleep(1000);
    await moreButton.click();
    browser.sleep(1000);
    var parisMore = moreContent.getText();
    expect(parisMore).toEqual(londonMore);
    browser.sleep(5000);
  });
});