# Imprime os numeros de 0 a 19 
print('Imprime os numeros de 0 a 5 ')
for x in range (5):
    print(x)

print('\n')

# Verificar se o numero digitado pelo usuario é um numero primo 
print('Verificar se o numero digitado pelo usuario é um numero primo ')
a = int (input ('Digite um número: '))
div = 0
for x in range (1, a+1):
    resto = a % x
    if resto == 0:
        div += 1

if div == 2:
    print('Número {} é primo'.format(a))
else:
    print('Número {} não é primo'.format(a))

print('\n')

# Imprime os números primos de 0 a 100
print( 'Imprime os números primos de 0 a 20' )
for num in range (20):
    div = 0
    for x in range(1, num + 1 ):
        resto = num % x
        if resto == 0:
            div += 1
    if div == 2:
        print(num)
print('\n')

# Verifica os quais são os números primos no intervalo de 0 até o valor digitado pelo usuario 
print('Verifica quais são os números primos no intervalo de 0 até o valor digitado pelo usuario ')
a = int(input('Entre com um número: '))
for num in range (a):
    div = 0
    for x in range(1, num + 1 ):
        resto = num % x
        if resto == 0:
            div += 1
    if div == 2:
        print(num)
