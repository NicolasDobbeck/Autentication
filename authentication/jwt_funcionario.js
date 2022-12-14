/*********************************************************************
 * Objetivo: Arquivo JWT
 * Autor: Nicolas Dobbeck
 * Data Criacao: 05/12/2022
 * Versao: 1.0
 *********************************************************************/

//Import da biblioteca jwt
const jwt = require('jsonwebtoken');

//Chave secreta para criacao do JWT
const SECRET = 'A*b#4@';
//Tempo para validar o token do JWT
const EXPIRES = 120;

//Criacao do JWT (retorna um token)
const createJWT = async function (payload){

    //Gera o token 
    //payload - a indetificacao do funcionario autenticado
    //SECRET - a chave secreta
    //expiresIn - tempo de expiracao do token
    const token = jwt.sign({funcionarioID: payload}, SECRET, {expiresIn: EXPIRES})
    
    return token
}

//Validacao de auteticidade do JWT (recebe o token para validacao)
const validateJWT = async function (token){
    let status;

    //Valida a autenticidade do token
    try {
        status = jwt.verify(token, SECRET);
    } catch (error) {
        status = false   
    }

    console.log(status);

    return status
}

module.exports={
    createJWT,
    validateJWT
}