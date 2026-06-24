import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProudctInfoPage extends BasePage{

    //private locators
    
    private readonly productHeader : Locator;
    private readonly productImages : Locator;
    private readonly productMetaData : Locator;
    private readonly prouctPriceData : Locator;
    private readonly map : Map<string, string|number>


    //locators initilization through customer

    constructor(page:Page){
        super(page);
        this.productHeader = page.getByRole('heading', { level: 1 });
        this.productImages = page.locator("div#content li img");
        this.productMetaData = page.locator("div#content ul.list-unstyled:nth-of-type(1) li");
        this.prouctPriceData = page.locator("div#content ul.list-unstyled:nth-of-type(2) li");
        this.map = new Map<string, string|number>();
    }

    //Public behaviours/actions to be defined

    async getproductHeader(): Promise<string>{
        return await this.productHeader.innerText();
    }

    async getproductImages(): Promise<number>{
        // await this.page.waitForTimeout(4000);
        await this.productImages.first().waitFor({state : 'visible'});
        return await this.productImages.count();
    }

    async getProductDataInfo(){
        this.map.set("ProductHeader", await this.getproductHeader());
        this.map.set("ProductImages", await this.getproductImages());
        await this.getProductMetaData();
        await this.getProductPriceData();
        return this.map;


    }

    private async getProductMetaData(){
        let meataData = await this.productMetaData.allInnerTexts();
        for(let data of meataData){
            let meta =  data.split(":");
            let metaKey = meta[0].trim();
            let metaValue = meta[1].trim();
            this.map.set(metaKey, metaValue)
        }
    }

    //$2,000.00
    //Ex Tax: $2,000.00
    private async getProductPriceData(){
        let priceData = await this.prouctPriceData.allInnerTexts();
        let productPrice = priceData[0].trim();
        let exPrice = priceData[1].split(":")[1].trim();
        this.map.set("ProductPrice", productPrice );
        this.map.set("exProductPrice", exPrice);
        


        
    }










} 