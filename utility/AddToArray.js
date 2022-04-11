const AddToArray = (item, array, setArray) => {
  if (array.map((item) => item.slug).includes(item.slug)) {
    const newItems = array.filter((el) => el.slug !== item.slug)
    setArray(newItems)
  } else if (array) {
    setArray([...array, item])
  }
}

export default AddToArray
