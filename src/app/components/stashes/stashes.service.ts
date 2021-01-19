import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiResponse} from '../../models/Stash.model';

@Injectable({
  providedIn: 'root'
})
export class StashesService {
  constructor(private http: HttpClient,
              ) {

              }

  /**
   * Get Stashes from api
   */
  getAllStashes(): Observable<ApiResponse> {
    const url = ' http://www.pathofexile.com/api/public-stash-tabs?id=220-1652-744-1341-230'
    return this.http.get<ApiResponse>(url, {});
  }


}
