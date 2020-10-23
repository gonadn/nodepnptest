 import { sp } from "@pnp/sp";
 import { SPFetchClient, SPOAuthEnv } from "@pnp/nodejs";
// require("@pnp/sp/webs");
// require("@pnp/sp/lists");
import {Web} from "@pnp/sp/webs";
import {Lists} from "@pnp/sp/lists";

export class SPListCheck {

    constructor() {
        const appID: any = "fba63bfe-fd3f-4a12-96ac-02c9733a3125";
        const appsecret: any = "91W-YIZ38tOR7M7UN.yzuwO6.zEnLX-3M5";
        console.log(appID);
        console.log(appsecret);

        sp.setup({
            sp: {
                fetchClientFactory: () => {
                    return new SPFetchClient("https://gonadndev.sharepoint.com/", appID, appsecret, SPOAuthEnv.SPO, "{realm}");
                },
            },
        });

        console.log(JSON.stringify(sp));
    }

    public checkListExist() {
        return new Promise((resolve, reject) =>  {
            // ensure that a list exists. If it doesn't it will be created with the provided title (the rest of the settings will be default):
            sp.web.lists.ensure("My List").then( (listEnsureResult: any) => {
                resolve(listEnsureResult);
            }).catch( (error) => {
                reject(error);
            });
        });
    }
}