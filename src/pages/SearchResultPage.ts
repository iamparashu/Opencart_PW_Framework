import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultPage extends BasePage{

    //private locators
    
    private readonly searchKeyCount : Locator;

    //locators initilization through customer

    constructor(page:Page){
        super(page);
        this.searchKeyCount = page.locator("div.product-layout");
    }

    async searckKeyCount(){
        return await this.searchKeyCount.count()
    }

    async selectProduct(product : string){
        await this.page.getByRole('link', { name: product, exact:true }).first().click();
    }
}