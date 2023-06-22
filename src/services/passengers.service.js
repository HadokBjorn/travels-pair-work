import { pageSchema } from "../schemas/page.schemas.js";

export function validateQuery(page){
    const validate = pageSchema.validate({page: page}, { abortEarly: false })
    if (validate.error) {
        const errors = validate.error.details.map((detail) => detail.message);
        return { status:400,message:"Invalid page value"};
    }
    return true
}