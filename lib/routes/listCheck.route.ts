import { Application, Request, Response } from 'express';
import { SPListCheck} from './../controllers/spListController'

export class PnPRoutes {

    public spListCheck: SPListCheck = new SPListCheck();

    public route(app: Application) {

        app.get("/api/listCheck", (req: Request, res: Response) => {
            if (req !== null && req !== undefined) {
                const listName: string = req.body.listname;
                this.spListCheck.checkListExist().then((listCheckResult)=>{
                    res.status(200).json(listCheckResult);
                });
            }
        });
        
        app.post("/api/listCheck", (req: Request, res: Response) => {
        
        });
        
        app.put("/api/listCheck", (req: Request, res: Response) => {
        
        });
        
        app.delete("/api/listCheck", (req: Request, res: Response) => {
        
        });

    }
}