class DatabaseConnection {
    private type: string;
    private username: string;
    private password: string;

  
    constructor(type: string, username: string, password: string) {
      this.type = type;
      this.username = username;
      this.password = password;
    }
 
    getType(): string {
      return this.type;
    }
  
    getUsername(): string {
      return this.username;
    }
  
    getPassword(): string {
      return this.password;
    }

    setType(type: string): void {
      this.type = type;
    }
  
    setUsername(username: string): void {
      this.username = username;
    }
  
    setPassword(password: string): void {
      this.password = password;
    }
  
  export default DatabaseConnection;
  
