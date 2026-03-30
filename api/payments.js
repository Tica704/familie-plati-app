export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwB_LjR0Em4kyEwaAVvuzSu2SVtcRFk6uqPmgHBcMTWg-iU2aLqLRyJZvR4ifFaZmnS/exec"
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
