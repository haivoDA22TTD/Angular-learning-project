import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' }) // ✅ Đảm bảo có dòng này
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users/register'; // sửa URL cho đúng với backend

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData); // ✅
  }
}
