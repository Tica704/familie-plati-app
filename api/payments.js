export default async function handler(req, res) {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxj1DAI63rLUoVmNawDnY85rSe90AKKx9-9-TRRJ9m6yBeZ6X1VjfCXf2RrB0Q9tQ57/exec";

  try {
    if (req.method === "GET") {
      const response = await fetch(SCRIPT_URL);
      const text = await response.text();

      if (!response.ok) {
        return res.status(response.status).json({
          error: "Google Apps Script request failed",
          status: response.status,
          body: text,
        });
      }

      res.setHeader("Content-Type", "application/json");
      return res.status(200).send(text);
    }

    if (req.method === "POST") {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const text = await response.text();

      if (!response.ok) {
        return res.status(response.status).json({
          error: "Google Apps Script POST failed",
          status: response.status,
          body: text,
        });
      }

      res.setHeader("Content-Type", "application/json");
      return res.status(200).send(text);
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({
      error: "Eroare",
      message: error.message,
    });
  }
}
