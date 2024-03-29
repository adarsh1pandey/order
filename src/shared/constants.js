export const COMMON_CONSTS = {
  AT_YOUR: 'AT YOUR',
  SERVICE: 'SERVICE',
  ORDER_IN_PROGRESS: 'ORDER IN PROGRESS',
  STATUS: 'STATUS',
  GUEST: 'GUEST',
  ROOM: 'ROOM',
  LOCATION: 'LOCATION',
  COMPLETED_ORDERS: 'COMPLETED ORDERS',
  SIGNED_IN_AS: 'Signed in as:',
  MARK_TAPPERT: 'Mark Tappert',
  SIGN_OUT: 'SIGN OUT',
  SIGN_IN: 'SIGN IN',
  EMPLOYEE_SIGN_IN: 'Employee sign in',
  WELCOME_TO_THE_EMPLOYEE_SIGN_IN_SITE: 'Welcome to the employee sign in site.',
  PLEASE_SIGN_IN_WITH_YOUR_EMPLOYEE_ID: 'Please sign in with your employee ID.',
  HOTEL: 'Hotel',
  EMPLOYEE_ID: 'Employee ID',
  REMEMBER_ME: 'Remember Me?',
  NEED_HELP: 'Need Help?',
  CLICK_HERE: 'CLICK HERE',
  CUSTOMER: 'CUSTOMER',
  ENTER_ALL_FIELDS: 'Enter all fields',
  PLATFORM: 'PLATFORM',
  NEW: 'NEW',
  SOMETHING_WENT_WRONG: 'Something went wrong',
};

export function objectToFormData(data) {
  let formData = new FormData();
  for (let key in data) {
    if (Array.isArray(data[key])) {
      formData.append(key, JSON.stringify(data[key]));
    } else {
      formData.append(key, data[key]);
    }
  }
  return formData;
}
