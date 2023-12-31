import styles from "./style.module.css"
const FallBackUI = ({
    city,
    addCityUi = false,
    loadingUi = false,
    errorMessage = ""
}) => {
    return (
        <>
            {loadingUi
                ?
                <>
                    <span className={styles.loadingSpinner}></span>
                    <h2 >Fetching weather data for {city} ...</h2>
                </>
                : addCityUi ?
                    <h2>Please enter city name to check weather</h2>

                    :
                    <>
                        <span className={styles.errorMmessage}>{errorMessage}</span>
                    </>}
        </>
    )
}

export default FallBackUI;