import styles from './Card.module.scss'
import { CardDTO } from '../types/card'

interface Props {
    data: CardDTO
}

function Card({data}: Props) {
    const openDialog = () => {
        console.log("openDialog() called!")
    }

    return (
        <div className={styles.card} onClick={openDialog}>
            <img src={data.urls.small} alt={data.alt_description} className={styles.card__image} />
        </div>
    )
}

export default Card