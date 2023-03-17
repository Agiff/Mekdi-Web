import Swal from 'sweetalert2';

const successAlert = (title, show = false, position = 'center') => {
  let option = {};

  option.icon = 'success';
  option.title = title;
  option.position = position;
  option.showConfirmButton = show;

  if (!show) option.timer = 1500
  
  Swal.fire(option);
}

const failureAlert = (title) => {
  Swal.fire({
    icon: 'error',
    title: title
  })
}

export {
  successAlert,
  failureAlert
}