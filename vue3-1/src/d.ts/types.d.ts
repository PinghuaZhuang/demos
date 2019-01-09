declare interface Color {
    color: string
    // person: Person
    [ propName: string ]: any
}

declare interface Person {
    name: string
}

// declare module '*.vue' {
//     export interface Color {
//         color: string
//         person: Person
//         [ propName: string ]: any
//     }
//     export interface Person {
//         name: string
//     }
// }
