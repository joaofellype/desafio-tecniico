import Swal from "sweetalert2";

const MySwal = (title, text, icon, timer) => {
  Swal.fire({
    title,
    text,
    icon,
    timer,
  });
};

export default MySwal;
