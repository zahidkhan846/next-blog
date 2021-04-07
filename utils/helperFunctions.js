export const uploadFile = async (picture) => {
  const formData = new FormData();
  formData.append("file", picture);
  formData.append("upload_preset", next - blog);
  formData.append("cloud_name", zahidkhan);

  const res = await fetch(process.env.cloudinary_api, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  return data;
};
