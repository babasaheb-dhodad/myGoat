import { Injectable } from '@angular/core';

@Injectable()
export class BreedService {
    public get(){
        var result={"1":"Cross",
        "2":"A",
        "3":"B"
            
    }
    return result;
    }
}