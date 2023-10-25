import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PODCAST_ENDPOINTS } from 'src/app/shared/endpoints/podcast.endpoint';
import { PodCastResult } from '../models/podcast';
import { Observable } from 'rxjs';
import { PodCastDetailResult } from '../models/podcast-detail';

@Injectable({ providedIn: 'root' })
export class PodCastService {
  constructor(private http: HttpClient) {}

  getPodCast(id: string): Observable<PodCastDetailResult> {
    return this.http.get<PodCastDetailResult>(
      `${PODCAST_ENDPOINTS.PODCAST}&id=${id}`
    );
  }

  getTopList(): Observable<PodCastResult> {
    return this.http.get<PodCastResult>(PODCAST_ENDPOINTS.TOP_LIST);
  }
}
