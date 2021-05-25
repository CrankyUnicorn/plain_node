class Session_Manager {

  constructor() {
    this.sessions = {};
  }

  deleteUser(sessionId) {
    delete this.sessions[sessionId];
    return;
  }

  getUser(sessionId) {
    //console.log('Session_Manager.getUser_A:', this.sessions[sessionId]);
    return this.sessions[sessionId];
  }

  setUser(sessionId, userData) {
    if (this.sessions[sessionId]) {
      Object.assign(this.sessions[sessionId], userData);
      return;
    }

    this.sessions[sessionId] = userData;

    //console.log('Session_Manager.getUser_B:', this.getUser(sessionId));
  }
}

// We export here new Session_Manager() to keep it a singleton.
module.exports = new Session_Manager();