def soma(a, b):
    return a + b

print (soma (1, 2))
print(soma(3, 4))

def subtracao (a, b):
    return a - b

print (subtracao (12, 2))
print(subtracao(13, 4))

def multiplicacao (a , b):
    return a * b
print(multiplicacao(3, 7))

def divisao (a, b):
    return a / b
print(divisao(20, 5))

print('\n')
#------------------------------------------------------------------------
print('Class - Calculadora 1')

class Calculadora:
    def __init__(self, num1, num2):
        self.valor_a = num1
        self.valor_b = num2
    
    def soma(self):
        return self.valor_a + self.valor_b

    def subtracao (self):
        return self.valor_a - self.valor_b


    def multiplicacao (self):
        return self.valor_a * self.valor_b


    def divisao (self):
        return self.valor_a / self.valor_b

calculadora =  Calculadora(10, 2)

print(calculadora.valor_a)
print(calculadora.soma())
print(calculadora.subtracao())
print(calculadora.divisao())
print(calculadora.multiplicacao())

print('\n')
#------------------------------------------------------------------------
print('Calculadora 2')

class Calculadora_2:
    
    def soma(self, valor_1, valor_2):
        return valor_1 + valor_2

    def subtracao (self, valor_1, valor_2):
        return valor_1 - valor_2


    def multiplicacao (self, valor_1, valor_2):
        return valor_1 * valor_2


    def divisao (self, valor_1, valor_2):
        return valor_1 / valor_2

calc =  Calculadora_2()

print(calc.soma(10, 2))
print(calc.subtracao(5, 3))
print(calc.divisao(100, 2))
print(calc.multiplicacao(10, 5))

print('\n')
print('Televisão 1 - Ligada ou não')
class Televisao:
    def __init__ (self):
        self.ligada = False

    def power(self):
        if self.ligada:
            self.ligada = False
        else:
            self.ligada = True

televisao = Televisao()
print('Televisão está ligada: {}'.format(televisao.ligada))

televisao.power()
print('Televisão esta ligada: {}'.format(televisao.ligada))

televisao.power()
print('Televisão está ligada: {}'.format(televisao.ligada))

print('\n')
print('Televisão 2 - Mudando de canal')
class Televisao_2:
    def __init__ (self):
        self.ligada_2 = False
        self.canal = 5

    def power_2(self):
        if self.ligada_2:
            self.ligada_2 = False
        else:
            self.ligada_2 = True

    def aumenta_canal(self):
        if self.ligada_2:
            self.canal += 1

    def diminui_canal(self):
        if self.ligada_2:
            self.canal -= 1 


tev_2 = Televisao_2()
print('Televisão está ligada: {}'.format(tev_2.ligada_2))

tev_2.power_2()
print('Televisão esta ligada: {}'.format(tev_2.ligada_2))

tev_2.power_2()
print('Televisão está ligada: {}'.format(tev_2.ligada_2))
print('Canal: {}'.format(tev_2.canal))

tev_2.power_2()
print('Televisão está ligada: {}'.format(tev_2.ligada_2))
#Aumenta canal
tev_2.aumenta_canal()
tev_2.aumenta_canal()
print('Canal: {}'.format(tev_2.canal))

# Diminui canal
tev_2.diminui_canal()
print('Canal: {}'.format(tev_2.canal))