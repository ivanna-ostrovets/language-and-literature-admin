import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'llta-create-test-form',
  templateUrl: './createTestForm.component.html',
  styleUrls: ['./createTestForm.component.scss']
})
export class CreateTestFormComponent {
  getNumbersRange(): number[] {
    return Array(answersQuantity).fill().map((x, i) => i + 1);
  }

  onSubmit() {
  }
}
