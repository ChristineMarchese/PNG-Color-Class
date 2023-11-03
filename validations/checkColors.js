const checkName = (req, res, next) => {
    if (req.body.name) {
      //console.log("name is ok");
      // next() is satisfied the condition it will move on to the next function
      next();
    } else {
      res.status(400).json({ error: "Name is required" });
    }
  };
  
  const checkBoolean = (req, res, next) => {
    const fav = req.body.is_favorite;
    if (typeof fav === "boolean") {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be type boolean" });
    }
  };
  
  module.exports = { checkName, checkBoolean };