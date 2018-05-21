import { AfterViewChecked, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

declare const tinymce: any;

@Component({
  selector: 'nt-text-editor',
  templateUrl: './text-editor.component.html',
})
export class TextEditorComponent implements AfterViewChecked, OnDestroy {
  @Input() elementId: string;
  @Input() readonly: boolean;
  @Input() text: string;

  @Output() textChange: EventEmitter<any> = new EventEmitter<any>();

  editor: any;

  ngAfterViewChecked() {
    if (!this.editor) {
      tinymce.PluginManager.load('equationeditor', '/plugin.min.js');

      tinymce.init({
        plugins: 'link, paste, equationeditor',
        selector: `#${this.elementId}`,
        content_css: '/build/mathquill.css',
        skin_url: '/skins/lightgray',
        element_format: 'html',
        default_link_target: '_blank',
        link_title: false,
        link_assume_external_targets: false,
        target_list: false,
        branding: false,
        elementpath: false,
        forced_root_block: '',
        toolbar: [
          'bold italic underline link | bullist numlist | subscript superscript | equationeditor | undo redo',
        ],
        menubar: false,
        statusbar: false,
        formats: {
          underline: { inline: 'u' },
        },
        setup: editor => {
          this.editor = editor;

          editor.on('change keydown redo undo', () => {
            const content = editor.getContent();
            this.textChange.emit(content);
          });
        },
      });
    }

    if (this.editor && this.readonly) {
      tinymce.get(this.elementId).setMode('readonly');
    }
  }

  ngOnDestroy() {
    tinymce.remove(`#${this.elementId}`);
  }
}
