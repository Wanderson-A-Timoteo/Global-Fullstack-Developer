def escrever_arquivo(texto):
    arquivo = open('teste.txt', 'w')
    arquivo.write('Minha primeira escrita. \n')
    arquivo.close()

def atualizar_arquivo(texto):
    arquivo = open('teste.txt', 'a')
    arquivo.write(texto)
    arquivo.close()

def ler_arquivo(nome_arquivo):
    arquivo = open(nome_arquivo, 'r')
    texto = arquivo.read()
    print(texto)


if __name__ == '__main__':
    #escrever_arquivo('Segunda linha com função. \n')
    #atualizar_arquivo('Terceira linha. \n')
    ler_arquivo('teste.txt')

