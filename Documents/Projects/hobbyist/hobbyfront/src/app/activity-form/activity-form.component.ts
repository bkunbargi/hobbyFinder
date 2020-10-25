import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivityServiceService } from '../activity-service.service'
import { ActivityPrefs } from 'src/app/model/activityprefs'
import { YoutubeService } from '../youtube.service';
import { Result } from '../result.model';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})

export class ActivityFormComponent implements OnInit {
   hobbyResult

   @Output() results: EventEmitter<Result[]> = new EventEmitter<Result[]>()

  constructor(private activService: ActivityServiceService, private youtubeService: YoutubeService) { 
  }

  activityForm = new FormGroup({
    Day: new FormControl(''),
    Night: new FormControl(''),
    Indoor: new FormControl(''),
    Outdoor: new FormControl(''),
    Date: new FormControl('')
 });

 activityprefs = new ActivityPrefs();

  ngOnInit(): void {
  }

  onFormSubmit() {
    if(this.activityForm.invalid){
      return;	
    } 	
    this.activityprefs.date = (this.activityForm.get('Date').value != null) ? this.activityForm.get('Date').value : "";
    this.activityprefs.indoor = (this.activityForm.get('Indoor').value != null) ? this.activityForm.get('Date').value : "";
    this.activityprefs.outdoor = (this.activityForm.get('Outdoor').value != null) ? this.activityForm.get('Outdoor').value : "";
    this.activityprefs.day = (this.activityForm.get('Day').value != null) ? this.activityForm.get('Day').value : "";
    this.activityprefs.night = (this.activityForm.get('Night').value != null) ? this.activityForm.get('Night').value : "";
    console.log(this.activityprefs.indoor, this.activityprefs.outdoor, this.activityprefs.day,
                this.activityprefs.night,
                this.activityprefs.date)
    this.activService
    .sendParamsBack(this.activityprefs)
    .subscribe(
      (response) => 
    {
      this.hobbyResult = response['activityForUser']
      this.youtubeService.getVideoSearchResults(this.hobbyResult)                               
      .subscribe(
        (results: Result[]) => {
          this.results.emit(results)
        }, 
        (err: any) => {
          console.log(err)
        },
        () => { // on completion
        }
      )
    }, 
      error => {
      console.log('Error', error);
    })
 }

 reset() {
  this.activityForm.reset({
     indoor: '1'
    });	   
  }	
setDefaultValues() {
    this.activityForm.patchValue({Date: "1", Indoor:"1", Day:"1"});
  }
  	
}