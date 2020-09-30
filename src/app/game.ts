export interface Game {
    _id: string,
    name: string,
    releaseYear: number,
    img: string,
    description: string,
    platforms: Array<string>,
    genres: Array<string>,
    publishers: Array<string>,
    developers: Array<string>,
    reviews: Array<Object>
    createdAt: Date
}