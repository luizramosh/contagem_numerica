function contar() {
  const inicio = document.getElementById("txti")
  const fim = document.getElementById("txtf")
  const passo = document.getElementById("txtp")
  const resultado = document.getElementById("resultado_calculo")

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    
    alert("[ERRO!] Preencha todos os dados!")
    resultado.innerHTML = 'Não foi possível contar'
  } else {
    resultado.innerHTML = "Contando: <br>"
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
        alert('Passo inválido! Considerando passo 1.')
        p = 1
    }

    if (i < f) {
      // Contagem em ordem crescente
      for (let c = i; c <= f; c += p) {
        resultado.innerHTML += ` ${c}  \u{1F449}`
      }
    } else {
      // Contagem em ordem descrescente
      for (let c = i; c >= f; c -= p) {
        resultado.innerHTML += `${c} \u{1F449}`
      }
    }
    resultado.innerHTML += `\u{1F3C1}`
  }
}
