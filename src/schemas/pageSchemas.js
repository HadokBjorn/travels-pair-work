import joi from "joi"

export const pageSchema = joi.object({
    page: joi.number().integer().min(1)
});