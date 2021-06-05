const formatterUsd = (price) => {
  
    const priceNumber = Number(price)
    const priceWithFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })
    return (priceWithFormat.format(priceNumber))
  }
  
    export default formatterUsd