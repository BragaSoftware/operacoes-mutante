const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Robusta - Foco em Teste de Mutação', () => {

  test('Operações Básicas e Erros', () => {
    expect(soma(2, 3)).toBe(5);
    expect(soma(0, 0)).toBe(0); // Mata mutantes de troca de sinal
    expect(subtracao(5, 2)).toBe(3);
    expect(subtracao(2, 5)).toBe(-3);
    expect(multiplicacao(3, 4)).toBe(12);
    expect(multiplicacao(3, 0)).toBe(0);
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });

  test('Raiz e Potência (Limites)', () => {
    expect(potencia(2, 3)).toBe(8);
    expect(potencia(2, 0)).toBe(1);
    expect(raizQuadrada(16)).toBe(4);
    expect(() => raizQuadrada(-1)).toThrow();
  });

  test('Fatorial e Fibonacci (Recursão/Loops)', () => {
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(fatorial(5)).toBe(120);
    expect(() => fatorial(-1)).toThrow();
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(5)).toBe(5);
  });

  test('Estatística de Arrays', () => {
    const nums = [10, 20, 30];
    expect(mediaArray(nums)).toBe(20);
    expect(mediaArray([])).toBe(0);
    expect(somaArray(nums)).toBe(60);
    expect(maximoArray(nums)).toBe(30);
    expect(() => maximoArray([])).toThrow();
    expect(minimoArray(nums)).toBe(10);
    expect(() => minimoArray([])).toThrow();
    expect(produtoArray([2, 3, 4])).toBe(24);
    expect(produtoArray([])).toBe(1);
  });

  test('Lógica e Comparações (Onde os mutantes sobrevivem)', () => {
    // Testando limites exatos (a chave para os 98%+)
    expect(isPar(2)).toBe(true);
    expect(isPar(3)).toBe(false);
    expect(isPar(0)).toBe(true);

    expect(isMaiorQue(10, 5)).toBe(true);
    expect(isMaiorQue(5, 10)).toBe(false);
    expect(isMaiorQue(5, 5)).toBe(false); // Mata mutante de a >= b

    expect(isEqual(7, 7)).toBe(true);
    expect(isEqual(7, 8)).toBe(false);

    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-1, 0, 10)).toBe(0); // Limite inferior
    expect(clamp(11, 0, 10)).toBe(10); // Limite superior
  });

  test('Teoria dos Números', () => {
    expect(isPrimo(7)).toBe(true);
    expect(isPrimo(1)).toBe(false); // Crítico para mutantes
    expect(isPrimo(4)).toBe(false);
    expect(isPrimo(-7)).toBe(false);
    expect(mdc(12, 8)).toBe(4);
    expect(mmc(12, 8)).toBe(24);
  });

  test('Conversões e Geometria', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(fahrenheitParaCelsius(32)).toBe(0);
    expect(grausParaRadianos(180)).toBeCloseTo(Math.PI);
    expect(areaCirculo(2)).toBeCloseTo(12.566, 2);
    expect(perimetroRetangulo(5, 4)).toBe(18);
  });
});