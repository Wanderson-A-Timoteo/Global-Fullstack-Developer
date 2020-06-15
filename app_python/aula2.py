a = 10

b = 5

# é preciso colocar o int no inicio pq o input esta recebendo uma string e é preciso converter para inteiro
c = int(input('Entre com o primeiro valor: '))
d = int(input('Entre com o segundo valor: '))

soma = c + d
subtracao = c - d
multiplicacao = c * d
divisao = c / d
resto = c % d



soma = a + b
subtracao = a - b
multiplicacao = a * b
divisao = a / b
resto = a % b

print('soma: ' + str(soma))
print(subtracao)
print(multiplicacao)
print(divisao)
print(int(divisao))
print(resto)


print('\n\n')

x = '1'

soma2 = int(x) + 1
print('x: ' + str(soma2))

print('\n\n')

print('Soma: {soma}.\nSubtração: {subtracao}. '
      '\nMultiplicação: {multiplicacao}'
      '\nDivsão: {divisao}'
      '\nResto: {resto}'.format(soma=soma,
                                  subtracao=subtracao,
                                  resto=resto,
                                  divisao=divisao,
                                  multiplicacao=multiplicacao))

print('\n\n')

resultado = ('Soma: {soma}.\nSubtração: {subtracao}. '
      '\nMultiplicação: {multiplicacao}'
      '\nDivsão: {divisao}'
      '\nResto: {resto}'.format(soma=soma,
                                  subtracao=subtracao,
                                  resto=resto,
                                  divisao=divisao,
                                  multiplicacao=multiplicacao))
print(resultado)

print('\n\n')

soma = 5 + 5
print('soma: {}'.format(soma))


print('\n\n')
a = 10 / 2
b = 10 % 2
print(a, b)