class Session_Manager{
  constructor(){
   this.sessions = {};
  }

  getUser(sessionId){
   return this.sessions[sessionId];
  }

  setUser(sessionId, userData){
   if(this.sessions[sessionId]){
     Object.assign(this.sessions[sessionId], userData);
     return;
   }

    this.sessions[sessionId] = userData;
  }
}
// We export here new OwnSession() to keep singleton across your project.

module.exports = new Session_Manager();