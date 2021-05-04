/**
 * Arquivo: src/presentation/controllers/signup.ts
 * Data: 02/05/2021
 * Descrição: arquivo responsável pela classe em TypeScript de 'Signup'
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

import { HttpResponse, HttpRequest } from '../protocols/htttp';
import { MissingParamError } from '../errors/missing-param-error';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}