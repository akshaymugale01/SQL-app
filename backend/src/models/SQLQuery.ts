// SQLQuery.ts

class SQLQuery {
    private query: string;
  
    constructor(query: string) {
      this.query = query;
    }
  
    // Getter method for the query
    getQuery(): string {
      return this.query;
    }
  
    // Setter method for the query
    setQuery(query: string): void {
      this.query = query;
    }
  }
  
  export default SQLQuery;
  