declare module "*.css" {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    // @ts-expect-error - clashing with the base, but we want to override
    export = classNames;
}
