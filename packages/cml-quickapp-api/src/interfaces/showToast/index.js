import ui from './index.interface';

export default function showToast(opt) {
  let { message = '', duration = 2000} = opt;
  ui.showToast({
    message,
    duration: duration > 1000 ? 1 : 0
  });
}