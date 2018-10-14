import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Applicant } from './Applicant';
import { MessageService } from './message.service';
import { ResumeSwiperComponent } from './resume-swiper/resume-swiper.component';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		observe: "response" as 'body',
	})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getUsers(): Observable<Applicant[]> {
  	return this.http.post<Applicant[]>('https://sd-hacks-node.herokuapp.com/loadApplicants', {"Position" : "Software Engineer"}, httpOptions)
  		.pipe(tap(users => console.log('fetched users' + JSON.stringify(users)),
  			catchError(this.handleError<Applicant[]>('getUsers'))));
  }

  postUsers(users: Applicant[]): Observable<any> {
  	return this.http.post<Applicant[]>('https://sd-hacks-node.herokuapp.com', users, httpOptions)
  		.pipe(
  			catchError(this.handleError('postUsers', users)));
  }

  returnToMenu(users: Applicant[]): Observable<any> {
  	return this.http.post<Applicant[]>('https://sd-hacks-node.herokuapp.com', users, httpOptions)
  		.pipe(
  			catchError(this.handleError('returnToMenu', users)));
  }


  private log(message: string) {
  	this.messageService.add('UserService: ${message}');
  }

	/**
	* Handle Http operation that failed.
	* Let the app continue.
	* @param operation - name of the operation that failed
	* @param result - optional value to return as the observable result
	*/
	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {
	 
	    // TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead
	 
	    // TODO: better job of transforming error for user consumption
	    this.log(`${operation} failed: ${error.message}`);
	 
	    // Let the app keep running by returning an empty result.
	    return of(result as T);
	  };
	}
}