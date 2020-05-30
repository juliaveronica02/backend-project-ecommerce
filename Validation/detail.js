const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCreateDetail(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.detail = !isEmpty(data.detail) ? data.detail : "";
  data.itemId = !isEmpty(data.itemId) ? data.itemId : "";

  // Item detail.
  if (Validator.isEmpty(data.detail)) {
    errors.detail = "Detail field is required";
  }
  // itemId.
  if (Validator.isEmpty(data.itemId)) {
    errors.itemId = "itemId field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
