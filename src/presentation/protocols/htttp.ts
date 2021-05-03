/**
 * Arquivo: src/presentation/protocols/http.ts
 * Data: 02/05/2021
 * Descrição: arquivo será responsável por tratar as Interfaces da aplicação
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

export interface HttpResponse {
  statusCode: number,
  body: any
}

export interface HttpRequest {
  body?: any
}