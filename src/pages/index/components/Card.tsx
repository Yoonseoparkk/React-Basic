import styles from './Card.module.scss'
import { CardDTO } from '../types/card'

interface Props {
    data: CardDTO
    handleDialog: (eventValue: boolean) => void
}

function Card({data, handleDialog}: Props) {
    const openDialog = () => {
        console.log("openDialog() called!")
        handleDialog(true)
    }

    return (
        <div className={styles.card} onClick={openDialog}>
            <img src={data.urls.small} alt={data.alt_description} className={styles.card__image} />
        </div>
    )
}

export default Card