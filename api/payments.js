export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxndOhmPfSC2gdu_5yA0uRk8behpleyvd-Vio2q5l6zs2o0kUc530f6y54RHgKbO8Q/exec"
    );

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
  } catch (error) {
    return res.status(500).json({
      error: "Eroare",
      message: error.message,
    });
  }
}
