const mongoose = require('mongoose');

class Connection {
  constructor() {
    this.dataBaseConnectionMongoDB();
    // this.dataBaseConnectionMySQL();
  };

  dataBaseConnectionMongoDB = async () => {
    try {
      const uri = "mongodb+srv://dbBeeeasy:b33345ysoftware@cluster0.xgick.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
      this.mongoGBConnection = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log('Connect MongoDB working...');
    } catch (error) {
      console.log(`Connect MongoDB don't working: ${error}`);
    };
  };

  // dataBaseConnectionMySQL() {

  // }
};

module.exports = new Connection;