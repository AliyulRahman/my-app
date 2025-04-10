import { CARTITEMS } from "./data-constant";

function List() {
    return (
        <>
        <div>
            {
                CARTITEMS.map(item=> (
                    <h5 key={item.id}>{item.title}</h5>
                ))
            }
        </div>
        </>
    );
}

export default List