function doubler() {
  let = input = document.getElementById("user-number").value
  if (input < 0 || input > 1000) return
  input *= 2
  document.getElementById("result").innerHTML = input
}

document.getElementById('userNumberButton').onclick = doubler