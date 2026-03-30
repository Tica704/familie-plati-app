export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxndOhmPfSC2gdu_5yA0uRk8behpleyvd-Vio2q5l6zs2o0kUc530f6y54RHgKbO8Q/exec"
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "Eroare",
      message: error.message,
    });
  }
}
