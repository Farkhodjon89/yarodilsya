const FormatPrice = (price) =>
    price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' сум'

export default FormatPrice