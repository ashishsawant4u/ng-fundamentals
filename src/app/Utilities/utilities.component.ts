import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name:'replaceStr'
})
export class ReplaceStringPipe implements PipeTransform
{
    transform(originalText:string,source:string,target:string) 
    {
        return originalText.replace(source,target);
    }

}