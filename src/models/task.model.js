class Task {
    constructor({ id, title, description, createdAt }) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.createdAt = createdAt || new Date().toISOString();
    }
  
    validate() {
      if (!this.title || !this.description) {
        throw new Error('Title and description are required');
      }
      // Add more validations, or you can use external library like middy
    }
  
    toJSON() {
      return {
        id: this.id,
        title: this.title,
        description: this.description,
        createdAt: this.createdAt,
      };
    }
  }
  
 module.exports = Task;
  