import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'lastDigits'
})

export class LastDigits implements PipeTransform {
    transform(value: string, sumDigits: number, displayChar: String) {
        if (sumDigits > value.length) {
            return value;
        } else {
            let charNumber = value.length - sumDigits;
            let chars = "";
            for (let i = 0; i < charNumber; i++)
                chars += displayChar;
            return chars + value.substring(charNumber, value.length)

        }
    }
}