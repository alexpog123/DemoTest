import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService {

  private URL = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get(this.URL);
  }

}
