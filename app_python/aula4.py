# Descreve os numeros de 0 a 19 
for x in range (20):
    print(x)



# Verificar se o numero digitado pelo usuario é um numero primo 
#a = int (input ('Digite um número'))

#for x in range (1, a+1):
#    resto = a % x
#    if resto == 0:
#        div = div + 1
#        
#        if div == 2:
#            print('Número {} é primo'.format(a)
#    else
#        print('Número {} não é primo'.format(a))


for num in range (101):
    div = 0
    for x in range(1, num + 1 ):
        resto = num % x
        if resto == 0:
        div += 1
    if div == 2:
        print(num)
