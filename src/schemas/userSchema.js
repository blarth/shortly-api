import joi from 'joi';

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required()
});

export default userSchema;