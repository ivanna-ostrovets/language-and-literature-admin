import { Component, OnInit, Input, Output, ViewChild, EventEmitter, AfterViewChecked, OnDestroy} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

import { Subject } from '../../../common/models/subject';
import { Category } from '../../../common/models/category';
import { Test } from '../../../common/models/test';
import { Question } from '../../../common/models/question';

import { CategoryService } from '../../../common/services/category.service';

declare const tinymce: any;

@Component({
  selector: 'llta-test-form',
  templateUrl: './testForm.component.html',
  styleUrls: ['./testForm.component.scss']
})
export class TestFormComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('testForm') testForm: NgForm;
  @Input() test: Test;
  @Input() subjects: Subject[];
  @Output() formEmitter: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  editor: any;
  text: string;
  categories: Category[] = [];
  imagesUrls: any[] = [''];

  constructor(
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    this.formEmitter.emit(this.testForm);
    this.onSubjectChange(this.test.subject);
  }

  ngAfterViewChecked() {
    if (!this.editor) {
      tinymce.PluginManager.load('equationeditor', '/plugin.min.js');

      tinymce.init({
        plugins: 'link, paste, equationeditor',
        selector: '#textarea0',
        content_css: '/build/mathquill.css',
        skin_url: '/skins/lightgray',
        toolbar: [
          'bold italic underline | bullist numlist | subscript superscript | equationeditor'
        ],
        setup: editor => {
          this.editor = editor;

          editor.on('change keydown redo undo', () => {
          });
        },
      });

      // tinymce.init({
      //   anchor_bottom: false,
      //   anchor_top: false,
      //   default_link_target: '_blank',
      //   link_title: false,
      //   link_assume_external_targets: false,
      //   plugins: 'link, paste',
      //   target_list: false,
      //   branding: false,
      //   elementpath: false,
      //   entity_encoding: 'raw',
      //   element_format: 'html',
      //   forced_root_block: '',
      //   menubar: false,
      //   paste_as_text: true,
      //   selector: '#textarea0',
      //   skin_url: '/assets/lightgray',
      //   toolbar: 'bold italic underline link removeformat | undo redo',
      //   valid_elements: 'b,i,b/strong,i/em,u,a[href|target],br',
      //   formats: {
      //     underline: { inline: 'u' },
      //   },
      //   setup: editor => {
      //     this.editor = editor;
      //
      //     editor.on('change keydown redo undo', () => {
      //       const content = editor.getContent();
      //       // this.onEditorKeyup.emit(content);
      //     });
      //   },
      // });
    }
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }


  onSubjectChange(subjectId: string) {
    this.categoryService.getAll(subjectId)
      .then(categories => {
        this.categories = categories;
      });
  }

  onQuestionsQuantityChange(quantity: number) {
    this.resizeArray(this.test.questions, quantity, new Question());
    this.resizeArray(this.imagesUrls, quantity, '');
  }

  onMatchingQuestionSelected(question: Question) {
    question.letteredAnswersQuantity = null;
    question.numberedAnswersQuantity = null;
    question.answers = [];
  }

  uploadImage(event: any, questionIndex: number): void {
    const file = event.srcElement.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.test.addAttachment(file.name, file.type, reader.result);
      this.test.questions[questionIndex].img = file.name;
      this.imagesUrls[questionIndex] = this.sanitizer.bypassSecurityTrustStyle('url(' + reader.result + ')');
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  onAnswersQuantityChange(quantity: number, question: Question) {
    this.resizeArray(question.answers, quantity, {});

    if (question.matchingQuestion) {
      question.numberedAnswersQuantity = question.answers.length;
      question.letteredAnswersQuantity = question.answers.length;
    }
  }

  private resizeArray(array: any[], index: number, element: any) {
    while (array.length > index) {
      array.pop();
    }

    while (array.length < index) {
      array.push(element);
    }
  }
}
