a = int (input('Primeiro valor: '))
b = int (input('Segundo valor: '))
c = int (input('Terceiro valor: '))

if a > b:
    print('O primeiro número é maior A: {} '.format(a))
else:
    print('O segundo número é maior B: {}'.format(b))

print('\n')

if a > b and a > c:
    print('O primeiro número é maior A: {} '.format(a))
elif b > a and b > c:
    print('O segundo número é maior B: {}'.format(b))
else:
    print('O terceiro número é maior C: {}'.format(c))

print('\n')

# Verificar se o numero digitado é par ou impar
d = int (input('Entre com um número: '))
resto = d % 2
if resto == 0:
    print('O número é par')
else:
    print('O número é impar')

print('\n')

# verifica se entre dois numeros digitados existe um que seja par
e = int (input('Entre com 1º número: '))
f = int (input('Entre com 2º número: '))
resto_e = e % 2
resto_f = f % 2
if resto_e == 0 or resto_f == 0:
    print('Foi digitado um número par')
else:
    print('Não foi digitado nenhum número par')

print('\n')

g = int (input('Primeiro bimestre: '))
h = int (input('Segundo bimestre: '))
i = int (input('Terceiro bimestre: '))
j = int (input('Quarto bimestre: '))

media = (g + h + i + j) / 4
if g <= 10 and h <= 10 and i <= 10 and j <= 10:
    print('media: {}'.format(media))
else:
    print('Foi informado alguma nota errada')

print('\n')

l = int (input('Nota primeiro bimestre: '))
if l > 10:
    print('Você digitou a nota do primeiro bimestre errado')
    l = int (input('Digite Novamente a nota do primeiro bimestre: '))

m = int (input('Nota segundo bimestre: '))
if m > 10:
    print('Você digitou a nota do segundo bimestre errado')
    m = int (input('Digite Novamente a nota do segundo bimestre: '))

n = int (input('Nota terceiro bimestre: '))
if n > 10:
    print('Você digitou a nota do terceiro bimestre errado')
    n = int (input('Digite Novamente a nota do terceiro bimestre: '))

o = int (input('Nota quarto bimestre: '))
if o > 10:
    print('Você digitou a nota do quarto bimestre errado')
    o = int (input('Digite Novamente a nota do quarto bimestre: '))

media = (l + m + n + o) / 4
print('media: {}'.format(media))

print('\n')


p = 0
resultado = 'neutro'
if p > 0:
    resultado = 'positivo'
elif p < 0:
    resultado = 'negativo'
p = resultado

print('\n')


if not 5==5:
    print('afirmação verdadeira')
else:
    print('afirmação falsa')

    print('\n')
    q = input('Digite o primeito valor: ')
    r = input('Digite o primeito valor: ')
    soma = q + r
    print('O valor da soma é: {soma}'.format(soma=soma))


print('\n')


s = 10
t = 10
u = 10
if s > t or s >= u:
    print('Primeiro afirmação é verdadeira')
elif a == b:
    print('Segunda afirmação é verdadeira')
else:
    print('Nenhuma afirmação é verdadeira')
