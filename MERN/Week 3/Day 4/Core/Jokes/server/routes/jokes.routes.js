const JokesController = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokess);
    app.get('/api/jokes/:id', JokesController.findOneSingleJokes);
    app.patch('/api/jokes/:id', JokesController.updateExistingJokes);
    app.post('/api/jokes/new', JokesController.createNewJokes);
    app.delete('/api/jokes/:id', JokesController.deleteAnExistingJokes);
}
