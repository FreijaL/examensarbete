import { Color } from "../models/color.module";


export type ThemeType = "dark" | "red" | "green" | "yellow" | "blue";

export interface Theme {
    "--background": Color;
    "--text": Color;
    "--textShadow": Color;
}