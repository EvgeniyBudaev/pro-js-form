import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const mdcTextFieldAll = document.querySelectorAll('.mdc-text-field')
if (mdcTextFieldAll) mdcTextFieldAll.forEach(mdcTextField => new MDCTextField(mdcTextField))


const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

