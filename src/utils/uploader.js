import toast from "react-hot-toast";

export const uploadFile = (file, onStart, onSuccess, onError) => {
  const type = file.type.startsWith("image/") ? "image" : "video";

  const apiUrl =
    type === "image"
      ? "https://api.aceimg.com/api/upload"
      : "https://videy.co/api/upload";

  const formData = new FormData();
  formData.append("file", file);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", apiUrl, true);

  onStart?.();

  xhr.onload = () => {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.responseText);
      const routeUrl = res.link ? res.link : null;

      if (res.status === true && routeUrl) {
        toast.success("Upload sukses!");
        onSuccess?.(routeUrl);
      } else if (routeUrl) {
        toast.success("Upload selesai!");
        onSuccess?.(routeUrl);
      } else {
        toast.error("Upload gagal: Respon tidak valid.");
        onError?.();
      }
    } else {
      toast.error(`Gagal upload! Status: ${xhr.status}`);
      onError?.();
    }
  };

  xhr.onerror = () => {
    toast.error("Upload error! Tidak bisa terhubung.");
    onError?.();
  };

  xhr.send(formData);
};