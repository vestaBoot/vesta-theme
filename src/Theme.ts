import { Black, Blue, SemiDark, White } from "./Colors";
import { IColor } from "./Theme/Color";
import { ILayout } from "./Theme/Layout";
import { ISize } from "./Theme/Size";
import { ITiming } from "./Theme/Timing";
import { IZindex } from "./Theme/ZIndex";
import { fontSize } from "./Util";

export interface ITheme {
    direction: "rtl" | "ltr";
    oppositeDirection: "rtl" | "ltr";
    float: "right" | "left";
    oppositeFloat: "right" | "left";
    dirCoef: -1 | 1;

    fontFamily: string;

    color: IColor;
    layout: ILayout;
    size: ISize;
    timing: ITiming;
    zIndex: IZindex;
}

export function createTheme(customStyle?: Partial<ITheme>): ITheme {
    const finalizedStyle = getDefaultStyle();

    if (!customStyle) {
        return finalizedStyle;
    }

    for (let keys = Object.keys(customStyle), i = keys.length; i--;) {
        (finalizedStyle as any)[keys[i]] = (customStyle as any)[keys[i]];
    }

    return finalizedStyle;
}

function finalizeTheme(theme: ITheme): ITheme {

    theme.oppositeDirection = theme.direction === "ltr" ? "rtl" : "ltr";
    theme.oppositeFloat = theme.float = "left" ? "right" : "left";
    theme.dirCoef = theme.float === "left" ? 1 : -1;

    return theme;
}

function getDefaultStyle(): ITheme {
    const style: ITheme = {
        direction: "ltr",
        float: "left",
        fontFamily: "Verdana, Geneva, sans-serif",
        color: {
            Primary: "#519af7",
            PrimaryText: "$black",
            PrimaryLight: "#a9d4ff",
            PrimaryLightText: "$black",
            PrimaryDark: "#4375ac",
            PrimaryDarkText: White,
            PrimaryBackground: White,
            PrimaryBackgroundText: Black,
            Secondary: White,
            SecondaryText: Black,
            Default: SemiDark,
            DefaultText: White,
            Success: "#3db366",
            Error: "#f15b44",
            Info: Blue,
            Warning: "#fdc600",
        },
        layout: {
            Small: 320,
            Medium: 425,
            Large: 768,
            Xlarge: 1024,
        },
        size: {
            unit: 4,
            borderRadius: 5,
            breadcrumbHeight: 45,
            fontSize: {
                Xsmall: fontSize(.65),
                Small: fontSize(.85),
                Base: fontSize(1),
                Medium: fontSize(1.25),
                Large: fontSize(1.5),
                Xlarge: fontSize(2.25),
                XXlarge: fontSize(4),
            },
            header: {
                Height: 56,
                Padding: 16,
            },
            footerHeight: 32,
            sidenavWidth: 320,
            pageMaxWidth: 768,
        },
        timing: {
            Short: 250,
            Medium: 500,
            Long: 750,
            Default: 250,
        },
        zIndex: {
            Base: 1,
            Content: 2,
            Header: 10,
            Sidenav: 11,
            Navbar: 11,
            Dialog: 12,
            Datepicker: 12,
            Actionsheet: 13,
            Splash: 90,
            Notification: 99,
        },
    } as ITheme;

    return finalizeTheme(style);
}
