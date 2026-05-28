const express = require("express");
const router = express.Router();
const { body, validationResult} = require("express-validator"); 

router.get("/", (req, res)=>{
      res.render("pages/index",{"resultado":null, "erros":null, "valores":{"dia":"digite o número do dia"}});  
});

router.post("/classificar",
    body("dia").isInt().withMessage("O dia precisar ser um número inteiro."),
 (req, res)=>{

    const erros = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.render("pages/index", { "resultado":null, "erros":errors, "valores":{"dia":req.body.dia}});
    }

    
    const diaNum = Number(req.body.dia);

    
    let nomeDia;
    switch(diaNum){
        case 1: nomeDia = "Domingo"; break;
        case 2: nomeDia = "Segunda"; break;
        case 3: nomeDia = "Terça"; break;
        case 4: nomeDia = "Quarta"; break;
        case 5: nomeDia = "Quinta"; break;
        case 6: nomeDia = "Sexta"; break;
        case 7: nomeDia = "Sábado"; break;
        default: nomeDia = "Valor inválido"; break;
    }

    
    let objJson = { dia: nomeDia };
    res.render("pages/index", {"resultado": objJson, "valores": {"dia": req.body.dia}, "erros":null});

});

module.exports = router;