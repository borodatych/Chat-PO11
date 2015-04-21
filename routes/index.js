var checkAuth = require('middleware/checkAuth');
var chat = require('./chat');

module.exports = function(app) {

  app.get('/', require('./frontpage').get);

  app.get('/login', require('./login').get);
  app.post('/login', require('./login').post);

  app.post('/logout', require('./logout').post);

  app.post('/chat/rooms/new', checkAuth, chat.newRoom);

  // TODO здесь, конечно, кроме авторизации нужно проверять ещё и принадлежность пользователя запрашиваемой комнате
  app.get('/chat/users', checkAuth, chat.getAllUsers);
  app.get('/chat/rooms/:roomId/history', checkAuth, chat.getHistory);
  app.get('/chat/rooms', checkAuth, chat.getUserRooms);
  app.get('/chat', checkAuth, chat.get);

  app.get('/account', checkAuth, require('./account').get);

};
