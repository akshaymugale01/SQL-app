export function generateUniqueId(): string {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 15); // Generate a random string
    return `${randomString}${timestamp}`;
  }
  