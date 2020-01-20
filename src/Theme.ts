import { Black, Blue, Dark, SemiDark, Silver, White } from "./Colors";
import { fontSize } from "./Util";

export interface ITheme {
    Direction: "rtl" | "ltr";
    OppositeDirection: "rtl" | "ltr";
    Float: "right" | "left";
    OppositeFloat: "right" | "left";
    DirCoef: -1 | 1;
    FontFamily: string;
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
        form: {
            ElementBackground: string;
            ElementColor: string;
        };
    };
    layout: {
        Small: number;
        Medium: number;
        Large: number;
        Xlarge: number;
    };
    size: {
        Unit: number;
        BorderRadius: number;
        BreadcrumbHeight: number;
        FooterHeight: number;
        SidenavWidth: number;
        PageMaxWidth: number;
        element: {
            height: number;
            heightLarge: number;
            heightXLarge: number;
            padding: number;
            margin: number;
            minWidth: number;
        };
        form: {
            GroupPadding: number;
            GroupMargin: number;
            ElementHeight: number;
            ElementHeightLarge: number;
            ElementPadding: number;
            ElementBorderRadius: number;
        };
        fontSize: {
            Xsmall: number;
            Small: number;
            Base: number;
            Medium: number;
            Large: number;
            Xlarge: number;
            XXlarge: number;
        };
        header: {
            Height: number;
            Padding: number;
        };
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

    theme.OppositeDirection = theme.Direction === "ltr" ? "rtl" : "ltr";
    theme.OppositeFloat = theme.Float = "left" ? "right" : "left";
    theme.DirCoef = theme.Float === "left" ? 1 : -1;

    return theme;
}

function getDefaultStyle(): ITheme {
    const style: ITheme = {
        Direction: "ltr",
        Float: "left",
        OppositeDirection: "rtl",
        OppositeFloat: "right",
        DirCoef: 1,
        FontFamily: "Verdana, Geneva, sans-serif",
        color: {
            Border: Silver,
            Primary: "#519af7",
            PrimaryText: Black,
            PrimaryLight: "#a9d4ff",
            PrimaryLightText: Black,
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
            form: {
                ElementBackground: White,
                ElementColor: Dark
            }
        },
        layout: {
            Small: 320,
            Medium: 425,
            Large: 768,
            Xlarge: 1024,
        },
        size: {
            Unit: 4,
            BorderRadius: 5,
            BreadcrumbHeight: 45,
            FooterHeight: 32,
            SidenavWidth: 320,
            PageMaxWidth: 768,
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
            element: {
                height: 32,
                heightLarge: 48,
                heightXLarge: 64,
                margin: 4,
                minWidth: 64,
                padding: 8
            },
            form: {
                ElementBorderRadius: 5,
                ElementHeight: 32,
                ElementHeightLarge: 48,
                ElementPadding: 8,
                GroupMargin: 4,
                GroupPadding: 8
            }
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
