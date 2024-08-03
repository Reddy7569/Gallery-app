import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailclassName = isActive ? 'active_thumb' : 'normal_thumb'

  const onClickThumb = () => {
    setActiveThumbnail(id)
  }

  return (
    <li className="thumbnail_list_item">
      <button className="thumbnail_button" onClick={onClickThumb} type="submit">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailclassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
