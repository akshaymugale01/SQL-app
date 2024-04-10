// DatabaseConnection.ts

class DatabaseConnection {
    private type: string;
    private username: string;
    private password: string;
    // Add other necessary properties such as host, database name, etc.
  
    constructor(type: string, username: string, password: string) {
      this.type = type;
      this.username = username;
      this.password = password;
      // Initialize other properties as needed
    }
  
    // Getter methods
    getType(): string {
      return this.type;
    }
  
    getUsername(): string {
      return this.username;
    }
  
    getPassword(): string {
      return this.password;
    }
  
    // Setter methods
    setType(type: string): void {
      this.type = type;
    }
  
    setUsername(username: string): void {
      this.username = username;
    }
  
    setPassword(password: string): void {
      this.password = password;
    }
  
    // Add other getter and setter methods as needed
  }
  
  export default DatabaseConnection;
  