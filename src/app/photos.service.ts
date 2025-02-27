import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    small: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization:
          'Client-ID q6S8dpcng6Z3YqZpGrG1YzpMZ8gjtpYidQWbJOtv5o0'
      }
    });
  }
}
