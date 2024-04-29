const validateNoteTitleLength = (title) => {
  if (title.length > 50) {
    return "Your title cannot exceed 50 characters";
  }
  return null;
};

const validateNoteTextLength = (text) => {
  if (!text || text.length > 300) {
    return "Text cannot be empty and cannot exceed 300 characters";
  }
  return null;
};

module.exports = { validateNoteTitleLength, validateNoteTextLength };
