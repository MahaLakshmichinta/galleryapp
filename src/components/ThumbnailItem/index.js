// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnailActive' : 'thumbnailInActive'

  const onClickImageDisplay = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="list_container">
      <button className="btn-image" type="button" onClick={onClickImageDisplay}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
