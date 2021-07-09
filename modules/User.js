class User {
  constructor( email, password, session_key) {
    this.email = email;
    this.password = password;
    this.session_key = session_key;
  }

  getUserStats() {
    return `
      Password: ${this.password}
      Email: ${this.email}
      Session ID: ${this.session_key}
    `;
  }

  getKey(){
    return this.session_key;
  }
}

module.exports = User;