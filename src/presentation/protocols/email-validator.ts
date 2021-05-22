/**
 * Arquivo: src/presentation/protocols/email-validator.ts
 * Data: 02/05/2021
 * Descrição: arquivo responsável por lidar com a interface de 'EmailValidator'
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

export interface EmailValidator {
  isValid (email: string): boolean
}