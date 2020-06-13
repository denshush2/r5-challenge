import { IBook } from "./Book.interface";

export interface IGoogleAPIBookResponse {
    kind: string
    totalItems: number
    items:IBook[]
}