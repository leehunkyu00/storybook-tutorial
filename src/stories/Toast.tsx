// https://react-hot-toast.com/docs/toast
import toast, { Toaster, ToastPosition } from "react-hot-toast";

// const notify = () => toast("Hello world!");

export const Toast = ({ 
  duration, 
  position, 
  message, 
  type = 'blank'
}: { 
  duration: number; 
  position: ToastPosition; 
  message: string;
  type?: 'blank' | 'success' | 'error' | 'loading'; 
}) => {
  const notify = () => {
    switch (type) {
      case 'success':
        return toast.success(message);
      case 'error':
        return toast.error(message);
      case 'loading':
        return toast.loading(message);
      default:
        return toast(message);
    }
  };
  return (
    <>
      <button onClick={notify}>Make me a toast</button>
      <Toaster toastOptions={{ duration, position }} />
    </>
  );
};
