import Color from 'colorjs.io';

enum ColorEnum {
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

class Colors {
    theme: ColorModel;
    fonts!: ColorModel;

    constructor(theme: ColorModel) {
        this.theme = theme;
        this.setFontColors();
    }

    private setFontColors() {
        Object.entries(this.theme).forEach(([name, color]: [string, Color]) => {
            let currentFontColor = color;
            currentFontColor.hwb.b *= 35;
            this.fonts[name as keyof ColorModel] = currentFontColor;
        });
    }
}

export const themeDefault: Colors = new Colors({
    primary: new Color('#E45A15'),
    secondary: new Color('#00E0CE'),
    tertiary: new Color('#22867E'),
    darkPrimary: new Color('#945334'),
    darkSecondary: new Color('#30615D'),
    darkTertiary: new Color('#453731'),
});
