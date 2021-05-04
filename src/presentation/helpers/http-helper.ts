/**
 * Arquivo: src/presentation/helpers/http-helper.ts
 * Data: 02/05/2021
 * Descrição: arquivo será responsável por padronizar os 'Bad Requests' da aplicação
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

import { HttpResponse } from '../protocols/htttp';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})