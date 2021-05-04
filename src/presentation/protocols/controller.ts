/**
 * Arquivo: src/presentation/protocols/controller.ts
 * Data: 02/05/2021
 * Descrição: arquivo responsável por tratar as interfaces de protocolos do 'SignUpController' (handle)
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

import { HttpRequest, HttpResponse } from './htttp';

export interface Controller {
  handle(httpRequest: HttpRequest): HttpResponse
}

