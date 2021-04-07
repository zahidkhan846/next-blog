export const uploadFile = async (picture) => {
  const formData = new FormData();
  formData.append("file", picture);
  formData.append("upload_preset", process.env.cloudinaryFolder_name);
  formData.append("cloud_name", process.env.cloudinary_api_account_name);

  const res = await fetch(process.env.cloudinary_api, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  return data;
};
