import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
  }

  numberOnly(event: KeyboardEvent): void {
    const validKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (
      validKeys.includes(event.key) || // Allow special keys
      (event.key >= '0' && event.key <= '9') // Allow numeric keys
    ) {
      return; // Allow the key
    }
    event.preventDefault(); // Prevent non-numeric input
  }

  emailValidator(control: any) {
    if (control.value) {
      const matches = control.value.match("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}");
      return matches ? null : {'invalidEmail': true};
    } else {
      return null;
    }
  }
}
