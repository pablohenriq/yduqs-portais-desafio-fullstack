import 'reflect-metadata'

import { ValidationArguments } from 'class-validator'

import { IsBirthDateConstraint } from '@/application/validators/is-birth-date.decorator'
import { IsCpfConstraint } from '@/application/validators/is-cpf.decorator'
import { IsFullNameConstraint } from '@/application/validators/is-full-name.decorator'

describe('Custom Validators', () => {
	describe('IsFullNameConstraint', () => {
		let constraint: IsFullNameConstraint

		beforeEach(() => {
			constraint = new IsFullNameConstraint()
		})

		it('should pass for valid full name', () => {
			expect(constraint.validate('John Doe')).toBe(true)
		})

		it('should fail for name without space', () => {
			expect(constraint.validate('John')).toBe(false)
		})

		it('should return correct error message', () => {
			expect(constraint.defaultMessage()).toBe(
				'Nome completo deve conter nome e sobrenome (somente letras, espaços, hífens ou apóstrofos)',
			)
		})
	})

	describe('IsCpfConstraint', () => {
		let constraint: IsCpfConstraint

		beforeEach(() => {
			constraint = new IsCpfConstraint()
		})

		it('should pass for valid CPF', () => {
			expect(constraint.validate('400.657.150-04')).toBe(true)
		})

		it('should fail for invalid CPF', () => {
			expect(constraint.validate('invalid-cpf')).toBe(false)
		})

		it('should return correct error message', () => {
			expect(constraint.defaultMessage()).toBe('Número de CPF inválido')
		})
	})

	describe('IsBirthDateConstraint', () => {
		let constraint: IsBirthDateConstraint

		beforeEach(() => {
			constraint = new IsBirthDateConstraint()
		})

		it('should pass for valid birth date with sufficient age', () => {
			expect(constraint.validate('2000-01-01')).toBe(true)
		})

		it('should fail for future date', () => {
			const futureDate = new Date()
			futureDate.setFullYear(futureDate.getFullYear() + 1)
			expect(constraint.validate(futureDate.toISOString().split('T')[0])).toBe(false)
		})

		it('should fail for date with insufficient age', () => {
			const recentDate = new Date()
			recentDate.setFullYear(recentDate.getFullYear() - 10)
			expect(constraint.validate(recentDate.toISOString().split('T')[0])).toBe(false)
		})

		it('should fail for invalid date string', () => {
			expect(constraint.validate('invalid-date')).toBe(false)
		})

		it('should return correct error message', () => {
			const args = { constraints: [16] } as ValidationArguments
			expect(constraint.defaultMessage(args)).toBe(
				'A data de nascimento deve ser válida, ter pelo menos 16 anos e não estar no futuro',
			)
		})
	})
})
