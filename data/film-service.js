import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('blog', null, null, {
    dialect: 'sqlite',
    storage: './blog.sqlite'
});

const FilmModel = db.define('film', {
    title:  {type: Sequelize.STRING},
    year:   {type: Sequelize.INTEGER},
    genre:  {type: String}    
});

const DirectorModel = db.define('director', {
    name:   {type: Sequelize.STRING}
});

FilmModel.hasOne(DirectorModel);
DirectorModel.belongsTo(FilmModel);

casual.seed(123);

db.sync({ force: true }).then(() => {
    _.times(10, () => {
        return FilmModel.create({
            title: casual.catch_phrase,
            year: 2000 + Math.floor(casual.random * 16),
            genre: casual.color_name
        }).then((director) => {
            return director.createDirector({
                name: casual.first_name + " " + casual.last_name,
            });
        });
    });
});

const Film = db.models.film;
const Director = db.models.Director;

export {Film, Director};