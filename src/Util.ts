import Color from "color";

export function fontSize(coef: number = 1, baseFontSize: number = 14): number {
    return Math.ceil(coef * baseFontSize);
}

export function mediaQuery(min: number, max: number, style: Partial<CSSStyleDeclaration>) {
    if (0 < min && max > 0) {
        return {
            [`@media screen and (min-width: ${min}) and (max-width: ${max})`]: style
        }
    }
    if (min > 0) {
        return {
            [`@media screen and (min-width: ${min})`]: style
        }
    }
    if (max > 0) {
        return {
            [`@media screen and (max-width: ${max})`]: style
        }
    }
}

export function transparentize(color: string, ammount: number): string {
    return Color(color).fade(ammount).toString();
}

export function darken(color: string, ammount: number): string {
    return Color(color).darken(ammount).toString();
}

export function lighten(color: string, ammount: number): string {
    return Color(color).lighten(ammount).toString();
}

