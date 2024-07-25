import { InputField } from "../ui/InputField/InputField"
import { RestaurantList } from "../ui/RestaurantList/RestaurantList"

export const MainPage = ({ data }) => {
    return (
        <>
            <InputField />
            { data && <RestaurantList restaurantList={data} /> }
        </>
    )
}