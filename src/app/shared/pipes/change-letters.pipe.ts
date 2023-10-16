import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeLetters'
})
export class ChangeLettersPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Usamos expresiones regulares para realizar las sustituciones
    value = value.replace(/[AaÁá]/g, '4');
    value = value.replace(/[EeÉé]/g, '3');
    value = value.replace(/[IiÍí]/g, '1');
    value = value.replace(/[OoÓó]/g, '0');
    value = value.replace(/[UuÚúÜü]/g, '9');

    return value;
  }

}