import {Film, Person} from './film-service';

const resolvers = {
    Query: {
        film(_, args){
            return Film.find({where: args});
        }
    },
    Film: {
        director(film){
            return film.getDirector();
        }
    }
}

export default resolvers;
