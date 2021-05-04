/**
 * Arquivo: src/presentation/controllers/signup.ts
 * Data: 02/05/2021
 * Descrição: arquivo responsável pela classe em TypeScript de 'Signup'
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

import { HttpResponse, HttpRequest } from '../protocols/htttp';
import { MissingParamError } from '../errors/missing-param-error';
import { badRequest } from '../helpers/http-helper';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email'];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}