const Audio = require('../models/Audio');

// Create a new audio
exports.addAudio = async (req, res) => {
  try {
    const { name, image, description, song } = req.body;
    const audio = new Audio({ name, image, description, song });
    await audio.save();
    res.status(201).json(audio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing audio
exports.updateAudio = async (req, res) => {
  try {
    const { name, image, description, song } = req.body;
    const audio = await Audio.findByIdAndUpdate(req.params.id, { name, image, description, song }, { new: true });
    if (!audio) {
      return res.status(404).json({ message: 'Audio not found' });
    }
    res.json(audio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an audio
exports.deleteAudio = async (req, res) => {
  try {
    const audio = await Audio.findByIdAndDelete(req.params.id);
    if (!audio) {
      return res.status(404).json({ message: 'Audio not found' });
    }
    res.json({ message: 'Audio deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all audios
exports.getAudios = async (req, res) => {
  try {
    const audios = await Audio.find();
    res.json(audios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};