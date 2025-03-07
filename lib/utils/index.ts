import { toast } from "react-toastify";

export const slugify = (str: string, userId: string) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-') + "-" + userId.slice(0, userId.indexOf("-"));
};

export const capitalizeLetter = (str:string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const showErrorToast = () => {
    const message = "Ocurrió un error inesperado, inténtalo de nuevo";
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };