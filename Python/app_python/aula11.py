
lista = [1, 10]
arquivo = open('teste.txt', 'r')
try:
    divisao = 10 / 0
    numero = lista[1]
    x = a
except ZeroDivisionError:
    print('Não é possível realizar uma divisão por 0')
except IndexError:
    print('Erro ao acessar um indice inválido da lista')
except BaseException:
    print('Erro desconhecido. Erro: {}'.format(ex))
else:
    print('Executa quando não ocorre exceção')
finally:
    print('Sempre executa')
    print('Fechando o arquivo')
    arquivo.close()