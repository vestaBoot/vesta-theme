export interface ISize {
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
}