/**
 * Arquivo: src/presentation/controllers/signup.ts
 * Data: 02/05/2021
 * Descrição: arquivo responsável pela classe em TypeScript de 'Signup'
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

export class SignUpController {
  handle (httpRequest: any): any {
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    }
  }
}