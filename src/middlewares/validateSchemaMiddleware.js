export function validateSchemaMiddleware(schema) {
  return (req, res, next) => { 
    const validation = schema.validate(req.body);
    if (validation.error) {
      return res.sendStatus(422);
    }
    
    next();
  }
}