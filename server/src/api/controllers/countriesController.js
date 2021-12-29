"use strict";

const axios = require("axios"),
  { API_URL } = process.env;

exports.list_countries = async (req, res) => {
  const url = API_URL+req.path
  await axios
    .get(url)
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.get_country_by_alpha = async (req, res) => {
  const url = API_URL+req.path
  await axios
    .get(url)
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.get_country_by_name = async (req, res) => {
  const url = API_URL+req.path
  await axios
    .get(url)
    .then((result) => {
      res.json(result.data[0]);
    })
    .catch((err) => {
      res.json(err);
    });
};

