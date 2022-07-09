
const Upload = {
  uploadFile: (req, res) => {
    // const body = req.body;
    const file = req.file;
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    res.send(file);
  },
};
module.exports = Upload;
