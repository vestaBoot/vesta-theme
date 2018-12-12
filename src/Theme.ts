import { Black, Blue, SemiDark, Silver, White } from "./Colors";
import { fontSize } from "./Util";

export interface ITheme {
    direction: "rtl" | "ltr";
    oppositeDirection: "rtl" | "ltr";
    float: "right" | "left";
    oppositeFloat: "right" | "left";
    dirCoef: -1 | 1;
    fontFamily: string;
    color: {
        Border: string;
        Primary: string;
        PrimaryText: string;
        PrimaryLight: string;
        PrimaryLightText: string;
        PrimaryDark: string;
        PrimaryDarkText: string;
        PrimaryBackground: string;
        PrimaryBackgroundText: string;
        Secondary: string;
        SecondaryText: string;
        Default: string;
        DefaultText: string;
        Success: string;
        Error: string;
        Info: string;
        Warning: string;
    };
    layout: {
        Small: number;
        Medium: number;
        Large: number;
        Xlarge: number;
    };
    size: {
        unit: number;
        borderRadius: number;
        fontSize: {
            Xsmall: number;
            Small: number;
            Base: number;
            Medium: number;
            Large: number;
            Xlarge: number;
            XXlarge: number;
        },
        header: {
            Height: number;
            Padding: number;
        },
        breadcrumbHeight: number;
        footerHeight: number;
        sidenavWidth: number;
        pageMaxWidth: number;
    };
    timing: {
        Short: number;
        Medium: number;
        Long: number;
        Default: number;
    };
    easing: {
        EaseIn: string,
        EaseOut: string,
        EaseInOut: string,
        Default: string,
    }
    zIndex: {
        Base: number;
        Content: number;
        Header: number;
        Sidenav: number;
        Navbar: number;
        Dialog: number;
        Datepicker: number;
        Actionsheet: number;
        Splash: number;
        Notification: number;
    };
}

export function createTheme(iTheme?: Partial<ITheme>): ITheme {
    const fTheme = getDefaultStyle();

    if (iTheme) {
        for (let keys = Object.keys(iTheme), i = keys.length; i--;) {
            (fTheme as any)[keys[i]] = (iTheme as any)[keys[i]];
        }
    }

    return fTheme;
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
        oppositeDirection: "rtl",
        oppositeFloat: "right",
        dirCoef: 1,
        fontFamily: "Verdana, Geneva, sans-serif",
        color: {
            Border: Silver,
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
        easing: {
            EaseIn: "ease-in",
            EaseOut: "ease-out",
            EaseInOut: "ease-in-out",
            Default: "ease-in-out",
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
    };

    return finalizeTheme(style);
}
