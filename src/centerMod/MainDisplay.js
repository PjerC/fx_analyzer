
const MainDisplay = (props) => {

    const {header,setHeader} = props;
    // array
    const itemsArray = [
        {no:1, title:'title 1',
            content:
                {
                    el1: 'element 1',
                    el2: 'element 2'
                }
        },
        {no:2, title:'title 2',
            content:
                {
                    el1: 'element 3',
                    el2: 'element 4'
                }
        }
    ]
    return(
        <div className="d-flex flex-column justify-content-center align-items-center border border-secondary w-100">
            {
                itemsArray.map((items)=> 
                    <div id={items.title} className="border border-primary p-1 m-1" key={items.no}>array element:{items.no}, {items.title} </div>    
            )}
        </div>
    )
}

export default MainDisplay;