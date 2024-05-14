import { thema } from "./Thema"

type FontPropsType = {
    family?: string
    weight?:number
    color?:string
    lineHeight?:number
    Fmin?: number
    Fmax?:number
}

//мексин для шрифта
export const font = ({family,weight, color,lineHeight, Fmin, Fmax}:FontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    color: ${color || thema.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw-360px)/(1140-360)*(${Fmax}- ${Fmin})+${Fmin}px);
`