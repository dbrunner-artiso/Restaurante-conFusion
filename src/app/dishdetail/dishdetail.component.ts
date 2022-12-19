import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Comment } from '../shared/comment';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Feedback } from '../shared/feedback';
import { Location } from '@angular/common';
import { delay, switchMap } from 'rxjs/operators';

import { trigger, state , style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
    trigger('visibility', [
      state('shown', style({
        transform: 'scale(1.0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'scale(0.5)',
        opacity: 0
      })),
      transition('* => *', animate('0.5s ease-in-out'))
    ])
  ]
})
export class DishdetailComponent implements OnInit {
    dish: Dish;
    errMess: string;
    dishIds: string[];
    prev: string;
    next: string;
    dishcopy: Dish;

    feedbackForm: FormGroup;
    feedback: Feedback;
    @ViewChild('fform') feedbackFormDirective;

    visibility = 'hidden';

    formErrors = {
        'author': '',
        'comment': '',
      };

      validationMessages = {
        'author':{
          'required': 'Author name is required',
          'minlength': 'Author name must be at least 2 characters long',
        },
        'comment': {
          'required': 'A comment is required',
        }
      };

    constructor(
        private fb: FormBuilder,
        private dishService: DishService,
        private location: Location,
        private router: ActivatedRoute,
        @Inject('BaseURL') public BaseURL) {
            this.createForm();
        }

    ngOnInit():void {
        this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);

        this.router.params
        .pipe(switchMap((params: Params)=> {
           this.visibility= 'hidden';
           return this.dishService.getDish(params['id']);
          }))
        .subscribe(
          dish => {
            this.dish = dish;
            this.dishcopy = dish;
            this.setPrevNext(dish.id);

            this.visibility = 'shown';
          },
          errmess => this.errMess = errmess
        );
    }

    createForm() {
        this.feedbackForm = this.fb.group({
          author: ['', [Validators.required, Validators.minLength(2)]],
          rating: [5],
          comment: ['', [Validators.required]],
        });

        this.feedbackForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set form validation message
    }

    onValueChanged(data?: any) {
      if (!this.feedbackForm) { return; }

      const form = this.feedbackForm;

      for (const field in this.formErrors) {
        if (this.formErrors.hasOwnProperty(field)) {
          // clear previous error message (if any)
          this.formErrors[field] = '';

          const control = form.get(field);

          if(control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];

            for(const key in control.errors) {
              if (control.errors.hasOwnProperty(key)) {
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }
    }

    onSubmit() {
      this.feedback = this.feedbackForm.value;
      //console.log(this.feedback);

      const comment = new Comment();
      comment.author = this.feedbackForm.value.author;
      comment.rating = this.feedbackForm.value.rating;
      comment.comment = this.feedbackForm.value.comment;
      comment.date = new Date().toISOString();

      //this.dish.comments.push(comment);

      this.dishcopy.comments.push(comment);
      this.dishService.putDish(this.dishcopy)
      .subscribe(dish =>  {
        this.dish = dish;
        this.dishcopy = dish;
      },
      errmess => { this.dish = null; this.dishcopy = null; this.errMess = errmess});

      this.feedbackFormDirective.resetForm();
      this.feedbackForm.reset({
        author: '',
        rating: 5,
        comment: '',
        date:''
      });
    }

    setPrevNext(dishId: string) {
        const index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    }

    goBack(): void {
        this.location.back();
    }
}
