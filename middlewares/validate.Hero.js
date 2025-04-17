const {body, validationResult} = require ('express-validator')

const validateHero = [
    body('name').notEmpty().withMessage('Nome é obrigatorio!').isLength({
        min: 3}).withMessage('Nome muito curto para um super heroi'),
    
    body('power').optional().isString().withMessage('Poder deve ser texto'),

    (req, res, next) => {
        const erros = validationResult(req)
        if (!erros.isEmpty()) {
            return res.status(400).json({errors: erros.array()})
        }
    }
]

module.exports = validateHero;
