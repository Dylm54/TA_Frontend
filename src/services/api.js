const API_URL = import.meta.env.VITE_API_URL;

export async function predictAcne(file) {
  const fd = new FormData();
  fd.append("file", file);

  const res = await fetch(`${API_URL}/predict`, {
    method: "POST",
    body: fd,
  });

  if (!res.ok) {
    throw new Error(`Server responded with ${res.status}`);
  }

  return res.json();
}