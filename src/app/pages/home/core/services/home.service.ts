import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Folder} from "../interfaces";

@Injectable()
export class HomeService {
  private baseUrl = environment.API_URL + '/api/folders/';

  constructor(private http: HttpClient) {
  }

  getFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(this.baseUrl + 'all');
  }

  saveFolder(folder: Folder): Observable<Folder> {
    return this.http.post<Folder>(this.baseUrl, folder);
  }
}
