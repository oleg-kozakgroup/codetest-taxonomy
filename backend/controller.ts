import { Service } from './service';
import { Request, Response } from 'express';

export default class Controller {
    
    private readonly service: Service = new Service();
    
    public getCategory: any = async (req: Request, res: Response)=>{
        try {
            const { categories: [ topCategory ] }: any = await this.service.getCategories(req.query.url);
            res.json(topCategory.label.split('/').filter((i)=> !!i));
        } catch (e) {
            res.status(400).send( e.message || 'Internal server error');
        }
    }
    
}