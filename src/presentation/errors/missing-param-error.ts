/**
 * Arquivo: src/presentation/errors/missing-param-error.ts
 * Data: 02/05/2021
 * Descrição: arquivo será responsável por tratar os 'Errors' da aplicação
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

export class MissingParamError extends Error {
  /**
   * Padronização de tratativas de Mensagens de Erros da aplicação
   */
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`);
    this.name = 'MissingParamError'
  }
}