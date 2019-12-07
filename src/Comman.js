
export const validation = {
  username: '^[0-9]+$',
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/,
  name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
  address: /^[a-zA-Z0-9\s,.'-]{1,}$/,
  percentage: /(?!^0*$)(?!^0*\.0*$)^\d{1,2}(\.\d{1,2})?$/,
  averagenumber: '^[0-9]{1}+$',
  password: /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/,
  mobile10verify: /[0-9]/g,
  phneEmailid: /^((([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))|([0-9]{9,}))\w+$/,
  pancard: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
  ifsc: /^[A-Za-z]{4}\d{7}$/
};

