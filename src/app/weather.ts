export class Weather {
  constructor(
    public cityName:string,
    public temp:string,
    public icon:string,
    public weatherKind:string,
    public min:string,
    public max:string
  ){}
}