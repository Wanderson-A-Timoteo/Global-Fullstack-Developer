from aula7_televisao import Televisao

from aula7_calculadora1 import Calculadora

if __name__ == '__main__':
    televisao = Televisao
    print(televisao.ligada)
    televisao.power()
    print(televisao.ligada)
    calculadora = Calculadora(5, 10)
    print(calculadora.soma)
    