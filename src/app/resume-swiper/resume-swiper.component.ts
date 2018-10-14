import { Component, Input, HostListener } from '@angular/core';

import { Applicant } from '../Applicant';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resume-swiper',
  templateUrl: './resume-swiper.component.html',
  styleUrls: ['./resume-swiper.component.css']
})

export class ResumeSwiperComponent {
  @Input() selectedApplicant: Applicant;

  title = 'Resume grader';
  quota = 10;
  judged = 0;
  totalJudged = 0;

  //uniqueID, name
  accepted: Applicant[] = [];
  rejected: Applicant[] = [];
  viewed: Applicant[] = [];

  applicants: Applicant[] = [{"GPA": 3.6,
    "ResumeLink": 'http://www.idiomax.org/wp-content/uploads/2018/08/free-creative-resume-templates-5b82a79a8e498.jpg'
    , "Name": 'Bob Ahbooey'
    ,"AppliedTo": 'Software Engineering'
    ,"ID": 1234},
    {"GPA": 2.4,
    "ResumeLink": 'https://ghoshtrustfund.com/wp-content/uploads/2018/09/fake-resumes-simple-fake-peter-parker-resume-events-pinterest.jpg'
    , "Name": 'Peter Parker'
    ,"AppliedTo": 'Software Engineering'
    ,"ID": 3121},
    {"GPA": 1.5,
    "ResumeLink": 'http://www.idiomax.org/wp-content/uploads/2018/08/2018-resume-tips-5b82a79ee47b8.jpg'
    , "Name": 'Jedd `Amadeus Wolfgang` Levine'
    ,"AppliedTo": 'Software Engineering'
    ,"ID": 1123},
    {"GPA": 6.8,
    "ResumeLink": 'http://musmus.me/wp-content/uploads/fake-resumes-oyle-kalakaari-co-resume.png'
    , "Name": 'Brady L. Viertel'
    ,"AppliedTo": 'Software Engineering'
    ,"ID": 1253},
    {"GPA": 3.4,
    "ResumeLink": 'https://www.offtherecordnashville.com/g/fakeresume-resume-templates-728x1056.jpg'
    , "Name": 'K. Lareau'
    ,"AppliedTo": 'Software Engineering'
    ,"ID": 4124},
    {"GPA": .8,
    "ResumeLink": 'https://ambfaizelismail.com/wp-content/uploads/2018/09/fake-resume-generator-unique-fake-resumes-linkedin-s-resume-ideas-of-fake-resume-generator.jpg'
    , "Name": 'David J. Howe'
    ,"AppliedTo": 'Software Engineering'
    ,"ID": 1023}]

  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.getUsers();
    console.log(this.applicants);
  	this.selectedApplicant = this.applicants[0];
  }

  getUsers(): void {
  	this.userService.getUsers().subscribe(users => {this.applicants = users;
      console.log(this.applicants);
    });
  }

  postUsers(): void {
  	console.log("DebugPost");
  	var response;
  	this.userService.postUsers(this.applicants).subscribe(res => response = res);
  	console.log(response);
  }

  goBack(): void{
  	console.log("DebugBack");
  	var response;
  	this.userService.returnToMenu(this.applicants).subscribe(res => response = res);
  	console.log(response);
  }

  undo(): void {
  	this.totalJudged--;
  	let undone = this.viewed.pop();
  	if (this.accepted.find(user => user.name == undone.name)) {
  		this.accepted.pop();
      if (this.judged > 0) {
        this.judged--;
      }
  	} else {
  		this.rejected.pop();
  	}
  	this.selectedApplicant = undone;
  }

  isInvalid(): boolean {
  	return this.totalJudged == 0;
  }

  @HostListener('document:keypress', ['$event'])
  resumeJudge(event: KeyboardEvent) {
  	var code = event.code;
  	if (code == "ArrowLeft" || code == "ArrowRight") {
  	  if (this.totalJudged < this.applicants.length) {
	    if (!this.viewed.find(user => user.name == this.selectedApplicant.name)) {
		  this.viewed.push(this.selectedApplicant);
	  	if (code == "ArrowLeft") {
	  	  this.rejectResume();
	  	} else if (code == "ArrowRight") {
	  	  this.acceptResume();
	  	}
	  }
	  this.selectedApplicant = this.applicants[this.totalJudged];
	  }
	}
  }

  acceptResume() {
  	this.accepted.push(this.selectedApplicant);
    //this.selectedApplicant.status = "Accepted";
  	this.judged++;
  	this.totalJudged++;
  }

  rejectResume() {
  	this.rejected.push(this.selectedApplicant);
    //this.selectedApplicant.status = "Rejected";
  	this.totalJudged++;
  }
}
