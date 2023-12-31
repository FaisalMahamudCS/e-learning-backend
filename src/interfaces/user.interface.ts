// interfaces/user.interface.ts
export interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
    role: 'student' | 'instructor' | 'admin';
    // Add other fields as needed
  }