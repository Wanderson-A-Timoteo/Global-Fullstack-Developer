# Conjunto não imprime duplicidade
Conjunto = {1, 2, 3, 4, 4, 5, 2}
print(Conjunto)

# podemos add elemento no conjunto 
Conjunto.add(6)
print(Conjunto)

# podemos remover elemento no conjunto 
Conjunto.discard(2)
print(Conjunto)

conjunto1 = {1, 2, 3, 4, 5}
conjunto2 = {5, 6, 7, 8}
conjunto_uniao = conjunto1.union(conjunto2)
print('União: {}'.format(conjunto_uniao))

conjunto_intersecao = conjunto1.intersection(conjunto2)
print('Interseção: {}'.format(conjunto_intersecao))

conjunto_diferencia1 = conjunto1.difference(conjunto2)
print('Diferença entre 1 e  2: {}'.format(conjunto_diferencia1))

conjunto_diferenca2 = conjunto2.difference(conjunto_diferencia1)
print('Diferença entre 2 e 1:  {}'.format(conjunto_diferenca2))

conjunto_diff_simetrica = conjunto1.symmetric_difference(conjunto2)
print('Diferença simétrica: {}'.format(conjunto_diff_simetrica))


conjunto_a = {1, 2, 3}
conjunto_b = {1, 2, 3, 4, 5}

conjunto_subset = conjunto_a.issubset(conjunto_b)
print('A é subconjunto de B: {}'.format(conjunto_subset))

conjunto_superset = conjunto_b.issubset(conjunto_a)
print('B é um superconjunto de A {}'.format(conjunto_superset))


lista = ['cachorro', 'cachorro', 'gato', 'gato', 'elefante']
print(lista)

conjunto_animais = set(lista)
print(conjunto_animais)

lista_animais = list(conjunto_animais)
print(lista_animais)


print('\n')

conjunto3 = {10, 20, 30, 40, 50}
conjunto3.discard (40)
print(conjunto3)

print('\n')

conjunto_ab = {1, 1, 3, 4, 5}
conjunto_ba = {1, 3, 6}
conjunto_ab.add(6)
conjunto_ab.remove(1)
resultadon = list(conjunto_ab.intersection(conjunto_ba))
print(resultadon)

conjuntog = {1, 2, 2, 1, 4, 5}
print(conjuntog)