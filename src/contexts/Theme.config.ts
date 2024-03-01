import { Color } from "../models/color.module";
import { Theme, ThemeType } from "./Theme.model";


export const THEMES: Record<ThemeType, Theme> = {
    dark: {
        "--background": Color.BLACK,
        "--text": Color.WHITE,
        "--textShadow": Color.WHITE,
    },
    red: {
        "--background": Color.RED,
        "--text": Color.RED,
        "--textShadow": Color.RED,
    },
    blue: {
        "--background": Color.BLUE,
        "--text": Color.BLUE,
        "--textShadow": Color.BLUE,
    },
    yellow: {
        "--background": Color.YELLOW,
        "--text": Color.YELLOW,
        "--textShadow": Color.YELLOW,
    },
    green: {
        "--background": Color.GREEN,
        "--text": Color.GREEN,
        "--textShadow": Color.GREEN,
    }
};