//TODO getting parameters from location.href and them using it fetching data from API
function loadDetail() {
    
    const params = new URLSearchParams(location.search)
    if(!params.has('id')) {
      window.location.href = "./index.html";
    }
  
    fetch(`https://api.coingecko.com/api/v3/coins/${params.get('id')}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
    .then(data=>data.json())
    .then(render);
  
  }

  function render(data) {
    let logo = data.image.large;
    let name = `${data.name} (${data.symbol})`
    let inrPrice = data.market_data.current_price.inr
    let usdPrice = data.market_data.current_price.usd
    let eurPrice = data.market_data.current_price.eur
    let gbpPrice = data.market_data.current_price.gbp
    let description = data.description.en

    
    document.getElementById("coin-img").src=logo;
    document.getElementById("coin-name").innerHTML=`${name}`;
    document.getElementById("inr-price").innerText=`${inrPrice}`;
    document.getElementById("usd-price").innerText=`${usdPrice}`;
    document.getElementById("eur-price").innerText=`${eurPrice}`;
    document.getElementById("gbp-price").innerText=`${gbpPrice}`;
    document.getElementById("coin-description").innerHTML=`${description}`;
    // renderChart(data);
  }




  window.onload = function() {
    loadDetail();
  }