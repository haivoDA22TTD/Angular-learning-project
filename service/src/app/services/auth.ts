import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  decodeToken(): any {
    const token = this.getToken();
    if (!token) return null;

    try {
      return (token); // Không dùng .default
    } catch (error) {
      console.error('Invalid token:', error);
      return null;
    }
  }

  isTokenExpired(): boolean {
    const decoded: any = this.decodeToken();
    if (!decoded || !decoded.exp) return true;

    const now = Math.floor(Date.now() / 1000); // Unix timestamp (giây)
    return decoded.exp < now;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
