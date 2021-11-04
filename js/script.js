document.querySelector("#pricing-switch").addEventListener("click", ({ target: { checked } }) => {
  document.querySelectorAll(".js-price").forEach((priceElement) => {
    const { innerHTML } = priceElement;
    priceElement.innerHTML = Math.ceil(!checked ? innerHTML * 10 : innerHTML / 10) - 0.01;
  });
});
