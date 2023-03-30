import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appTitle',
})

export class AppTitlePipe implements PipeTransform{
  transform(
    resourceId: string,
    editText: string = "Edit",
    addText: string = "Add"
  ): string {
    return resourceId ? editText : addText
  }
}
