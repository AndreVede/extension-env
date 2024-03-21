import Color from 'colorjs.io';

export enum ColorEnum {
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary',
    darkPrimary = 'darkPrimary',
    darkSecondary = 'darkSecondary',
    darkTertiary = 'darkTertiary',
}

export type ColorModel = {
    [K in ColorEnum]: Color;
};

export class Theme {
    theme: ColorModel;
    fonts!: ColorModel;

    constructor(theme: ColorModel) {
        this.theme = theme;
        this.setFontColors();
    }

    private setFontColors() {
        this.fonts = { ...this.theme };
        Object.entries(this.fonts).forEach(([name, color]: [string, Color]) => {
            const currentColor: Color = new Color(color.toString());

            const gapColor: number = 70;

            if (currentColor.hwb.b > 40) {
                currentColor.hwb.b -= gapColor;
            } else {
                currentColor.hwb.b += gapColor;
            }
            this.fonts[name as keyof ColorModel] = currentColor;
        });
    }
}

export const themeDefault: Theme = new Theme({
    primary: new Color('#E45A15'),
    secondary: new Color('#00E0CE'),
    tertiary: new Color('#22867E'),
    darkPrimary: new Color('#945334'),
    darkSecondary: new Color('#30615D'),
    darkTertiary: new Color('#453731'),
});
