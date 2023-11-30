import { db } from "../db.js";

export const createUser = (req, res) => {
  const query =
    "INSERT INTO Users (`UserName`, `UserEmail`, `UserRole`, `UserPassword`) VALUES (?)";
  const values = [
    req.body.UserName,
    req.body.UserEmail,
    req.body.UserRole,
    req.body.UserPassword,
  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Data added");
  });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM Users WHERE UserID = ?";
  db.query(query, [id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Data deleted.");
  });
};

export const readUser = (req, res) => {
  const query = "SELECT * FROM Users";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const updateUser = (req, res) => {
  const userId = req.params.id;
  const query =
    "UPDATE Users SET `UserName` = ?, `UserEmail` = ?, `UserRole` = ? ,`UserPassword` = ? WHERE UserID = ?";
  const values = [
    req.body.UserName,
    req.body.UserEmail,
    req.body.UserRole,
    req.body.UserPassword,
  ];
  db.query(query, [...values, userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("updated");
  });
};