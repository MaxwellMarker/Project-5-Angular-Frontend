export interface Review {
    _id: string,
    username: string,
    title: string,
    content: string,
    rating: number,
    gameId: string,
    createdAt: Date
}