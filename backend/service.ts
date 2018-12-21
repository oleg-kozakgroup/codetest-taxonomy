import { NaturalLanguageUnderstandingV1 } from 'watson-developer-cloud';
import config from './config';

export class Service {
    private readonly nlu: NaturalLanguageUnderstandingV1 = new NaturalLanguageUnderstandingV1(config.nlu_options);
    
    public getCategories(url: string){
       return new Promise((resolve, reject)=>{
           this.nlu.analyze(Object.assign(config.parameters, {url}), (err, data) => {
               return err ? reject(err) : resolve(data);
           });
       });
    }
}