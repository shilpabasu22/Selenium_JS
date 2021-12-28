import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from 'chai';

Given(/^User navigates to google$/, function(){
    browser.url('https://www.google.co.uk/');
});
When(/^user searches for (.*)$/, async function (searchItem) {
    let ele = await $(`[name='q']`);
    await ele.click();
    await ele.setValue(searchItem);
    await browser.keys("Enter");
});
When(/^clicks on the first result$/, async function () {
    await $(`<h3>`).click();
})

Then(/^the url is (.*)$/,async function (url) {
    let pageUrl = await browser.getUrl();
    console.log(pageUrl)
    chai.expect(pageUrl).to.equal(url);
})