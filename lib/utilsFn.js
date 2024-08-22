export const getBase64 = async (file) => {
  return await new Promise((resolve) => {
    let baseURL = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};

export const DateFormatter = (dateobj) => {
  const date = new Date(dateobj);
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
const formattedDate = date.toLocaleDateString('en-GB', options).replace(/,/, '');
  return formattedDate;
};
