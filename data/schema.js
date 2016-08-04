const typeDefinitions = `
type Film {
    id: Int
    title: String
    year: Int
    genre: String
    director: Person
}
type Person {
    id: Int
    name: String
}
type Query {
    film(id: Int, genre: String): Film
}
schema {
    query: Query
}
`;

export default [typeDefinitions];