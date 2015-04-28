var checkAuth = require('middleware/checkAuth');
var chat = require('./chat');
var upload = require('./upload');

module.exports = function(app) {

  app.get('/', require('./frontpage').get);

  app.get('/login', require('./login').get);
  app.post('/login', require('./login').post);

  app.post('/logout', require('./logout').post);

  app.post('/chat/rooms/new', checkAuth, chat.newRoom);

  app.get('/chat/users', checkAuth, chat.getAllUsers);
  app.get('/chat/rooms/:roomId/history', checkAuth, require('middleware/checkAccessToRoom'), chat.getHistory);
  app.get('/chat/rooms', checkAuth, chat.getUserRooms);
  app.get('/chat', checkAuth, chat.get);

  app.get('/account', checkAuth, require('./account').get);

  app.get('/upload/:userId/:file', checkAuth, upload.get);
  app.post('/upload', checkAuth, upload.post);
};
