import { check, validationResult } from "express-validator";

export let validateInput = {
  todo: [
    check("title", "A todo list title is required").isString(),
    check("description", "A description is required").isString(),
    check("completed", "A status of the task is required").isBoolean(),
  ],
};
