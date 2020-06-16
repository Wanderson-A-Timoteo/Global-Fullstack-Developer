lista = [1, 3, 5, 7]
lista_animal = ['cachorro', 'gato', 'elefante', 'arara']
lista_mix = [1, 3, 5, 7, 'gato']


print(lista)

print(lista_animal)

print(lista_mix)

print(lista_animal[1])


print('\n')
# soma os valores da lista 
print (sum(lista))

# Imprime o maior valor da lista 
print (max(lista))

# Imprime o menor valor da lista 
print (min(lista))

# Numa lista de string a função max e min tb serve, porém ele compara pela primeira letra da string

# Imprime o maior valor alfabetico da lista de string 
print (max(lista_animal))

# Imprime o menor valor alfabetico da lista de string
print (min(lista_animal))

# Verifica se existe um animal na lista ou não
if 'gato' in lista_animal:
    print('Existe um gato na lista')
else:
    print('Não existe um gato na lista')


if 'lobo' in lista_animal:
    print('Existe um lobo na lista')
else:
    print('Não existe um lobo na lista')

# Verifica os elementos da lista e multiplica por 3 independente que seja string
nova_lista = lista_animal * 3
print(nova_lista)


# Verifica os elementos da lista e analisa se tem o que foi passado como parametro
# A função append caso o parametro não exista na lista ele insere o elemento ao fim da lista
if 'lobo' in lista_animal:
    print('Existe um lobo na lista')
else:
    lista_animal.append('lobo')
    print(lista_animal)

# A função pop sem parametro sempre remove o ultimo elemeto, caso seja preciso podemos definir a posição do indice da lista que queremos remover
lista_animal.pop()
print(lista_animal)

lista.sort()
lista_animal.sort()
print(lista)
print(lista_animal)

#Imprime a lista de forma reversa, ou seja, do ultimo para o primeiro
lista_animal.reverse()
print(lista_animal)



tupla = (1, 10, 12, 14)
print(tupla)
print(tupla[1])

#Retorna quantos elementos tem na tupla
print(len(tupla))
print(len(lista_animal))


