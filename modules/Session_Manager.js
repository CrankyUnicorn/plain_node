const User = require('./User')

class Session_Manager {
  static sessions = new Array(); 
  
  static createUniqueKey(){
    const max = 9999999999999999;
    var new_key = max - Math.floor(Math.random() * (max*0.1));
    var found_similar_key = false;
    this.sessions.forEach((session)=>{
      if(session.getKey() == new_key){
        found_similar_key = true;
      }
    })
    if(found_similar_key){
      new_key = this.createUniqueKey();
    }
    return new_key; 
  } 

  static deleteUser(session_key) {
    var found_key;
    this.sessions.forEach((session)=>{
      if(session.getKey() == session_key){
        found_key = session_key;
      }
    })
    
    if(found_key){
      delete this.sessions[found_key];
    }
  }

  static getUser(session_key) {
    var found_user = false;
    this.sessions.forEach((session)=>{
      if(session.session_key == session_key){
        console.info("<GetUserByID>: ", true);
        found_user = true;
      }
    })
    return found_user;
  }
  
  static getUserKey(email,password){
    //console.info("STATS2:", this.sessions[0].getUserStats());
    var found_key;
    this.sessions.forEach((session)=>{
      if(session.email == email){
        found_key = session.session_key;
        //console.log("<FOUND SESSION KEY BY EMAIL>:", found_key);
      }
    })
    return found_key;
  }
  
  static setUser(email, password) {
    let key = this.createUniqueKey();
    this.sessions.push(new User( email, password, key ));
    //console.info("LENGHT:", this.sessions.length);
    //console.info("KEY:", key);
    //console.info("STATS:", this.sessions[0].getUserStats());
    
    //console.log('Session_Manager.getUser_B:', this.getUser(sessionId));
  }
}

// We export here new Session_Manager() to keep it a singleton.
module.exports = Session_Manager;