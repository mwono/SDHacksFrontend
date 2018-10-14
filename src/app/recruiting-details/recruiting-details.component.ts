import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Applicant } from '../Applicant';
import { UserService } from '../user.service';

@Component({
  selector: 'app-recruiting-details',
  templateUrl: './recruiting-details.component.html',
  styleUrls: ['./recruiting-details.component.css']
})
export class RecruitingDetailsComponent implements OnInit {

  Applicants: Applicant[] = [{"GPA": 3.6,
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
    ,"ID": 1023}
  ];

	job: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.job = this.activatedRoute.snapshot.params['job'];
  	//this.getUsers();
  }

  getUsers(): void {
  	this.userService.getUsers().subscribe(applicants => this.Applicants = applicants);
  }

  goBack(): void{
  	console.log("DebugBack");
  	var response;
  	this.userService.returnToMenu(this.Applicants).subscribe(res => response = res);
  	console.log(response);
  }
}