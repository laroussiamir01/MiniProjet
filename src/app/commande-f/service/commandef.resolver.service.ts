import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { CommandefService } from './commandef.service';

@Injectable({
    providedIn: 'root'
})
export class CommandefResolver implements Resolve<any>{

    constructor(private commandefService:CommandefService){

    }
    resolve(){
        return this.commandefService.getAll();
    }
}
