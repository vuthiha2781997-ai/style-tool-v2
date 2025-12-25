export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { imageBase64 } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ error: "No image provided" });
  }

  return res.status(200).json({
    style: "Scandinavian",
    reason: "Light colors, natural materials, clean and minimal design."
  });
}
