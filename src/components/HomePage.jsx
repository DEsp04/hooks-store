const HomePage = (props) => {
  return (
    <div>
      <h1>My Hardware Store</h1>
      <div>
      <span>Currently On Sale: {props.saleItem}</span>
        <span>
          <button onClick={props.toggleEditSaleItem}>
          {props.editable ? 'Hide' : 'Edit Sale Item'}
        </button>
        </span>
      <div>
          {props.editable ? <div>
            <input
            onChange={props.handleItemCurrentlyOnSaleChange}  
            type="text"
            value={props.itemCurrentlyOnSale}
            />
          </div> : null}
      </div>
      </div>
    </div>
  )
}
export default HomePage