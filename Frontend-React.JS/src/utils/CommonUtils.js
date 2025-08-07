class CommonUtils {
  static getBase64(file) {
    return new Promise((resolve, reject) => {
      const render = new FileReader();
      render.readAsDataURL(file);
      render.onload = () => resolve(render.result);
      render.onerror = (error) => reject(error);
    });
  }
}

export default CommonUtils;
