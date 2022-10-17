import './ClearButton.sass'

const ClearButton = (props) =>{
    let {length,deleteAllItem} = props;
    return (
        <div className="clear">
            <div className="clear_count">
                You have padding {length} task
            </div>
            <button className="clear_btn" onClick={deleteAllItem}>Clear All </button>
        </div>
    )
}

export default ClearButton;