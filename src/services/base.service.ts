import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private backend_url = "http://localhost:8054"
  constructor(private http: HttpClient) { }

  getToken(): string | null {
    const token = localStorage?.getItem('user');  // Get token from localStorage
    if (token) {
      let data: AuthModel = JSON.parse(token);
      return data?.token
    }
    return null;  // Return token or null if not found
  }

  public getHeader(isAuth: boolean = false) {
    let reqHeader: HttpHeaders;
    const token = this.getToken();  // Corrected method name

    if (isAuth && token) {
      reqHeader = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      );
    } else {
      reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    return { headers: reqHeader };
  }
  public GetAuth(routePath: string) {
    return this.http.get<any>(this.backend_url + routePath);
  }

  public PostAuth(endpoint: string, data: any) {
    return this.http.post<any>(this.backend_url + endpoint, data, this.getHeader(true));
  }

  public PutAuth(endpoint: string, data: any) {
    return this.http.put<any>(this.backend_url + endpoint, data, this.getHeader(true));
  }

}
