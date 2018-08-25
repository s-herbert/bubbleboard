const Board = require("../models/BoardModel");

const BoardController = {
  createBoard(req, res, next) {
    Board.create({googleId, boardInput, name}, (err, info) => {
      if (err) console.log(err);
    });
  },

  getBoards(req, res, next) {
    Board.find({googleId}, (err, info) => {
      if (err) console.log(err);
      if (!info) next();
      return;
    });
  },

  getBoard(req, res, next) {
    Board.findOne({googleId, name}, (err, info) => {
      if (err) console.log(err);
      if (!info) next();
      return;
    });
  }
};

module.exports = BoardController;
