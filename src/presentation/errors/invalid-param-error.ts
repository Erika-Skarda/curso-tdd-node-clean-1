/**
 * Arquivo: src/presentation/errors/invalid-param-error.ts
 * Data: 22/05/2022
 * Descrição: arquivo será responsável por tratar os 'Errors' em caso de dar
 * e-mail inválido.
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

export class InvalidParamError extends Error {
  /**
   * Padronização de tratativas de Mensagens de Erros da aplicação
   */
  constructor(paramName: string) {
    super(`Invalid param: ${paramName}`);
    this.name = 'InvalidParamError'
  }
}